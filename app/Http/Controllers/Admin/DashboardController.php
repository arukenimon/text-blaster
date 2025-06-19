<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\cloudconfig;
use App\Models\config_tables;
use App\Models\contacts;
use App\Models\messages;
use App\Models\segments;
use App\Models\templates;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
class DashboardController extends Controller
{
    //

    public function getrecipients(segments $segment){
        $segment->load('contacts');
        return response()->json($segment->contacts);
    }

    public function index(){
        return Inertia::render('Authenticated/home',[
            'messages' => messages::get(),
            'config' => config_tables::get()[0] ?? [],
            'cloudconfig' => cloudconfig::get()[0] ?? [],
            'templates' => templates::get(),
            'allrecipients' => contacts::with(['segment'])->get(),
            'allsegments' => segments::all()->map(function($segment){
                return [
                    'ID' => $segment->id,
                    'id' => $segment->segment,
                    'label' => $segment->description,
                    'count' => $segment->contacts->count()
                ];
            })//segments::get(), // I want the COLUMN name return to id, 'segment' return to label,
        ]);
    }

    public function saveConfig(Request $request){
        $request->validate([
            'type' => 'in:local,cloud',
            'localaddr' => "required_if:type,local",
            'port' => "required_if:type,local",

            'user' => "required",
            'pw' => "required",

            'simslot' => [
                'required_if:type,local',
                Rule::when($request->type == 'local','in:1,2')
            ],

        ]);

        //dd($request);
        if($request->type == 'local'){
            config_tables::updateOrInsert(
['id' => config_tables::first()?->id ?? null],
    [
                "localaddress"=> $request->localaddr,
                "port"=> $request->port,
                "username"=> $request->user,
                "password"=> $request->pw,
                "simslot" => $request->simslot,
            ]);
        }else{
            cloudconfig::updateOrInsert(
                ['id' => cloudconfig::first()?->id ?? null],
            [
                "username" => $request->user,
                "password" => $request->pw,
            ]);
        }




        return back()->with([
            'flash' => [
                'title' => 'Success!',
                'message' => 'Config successfully saved!',
                'icon' => 'success'
            ]
        ]);
    }

    private $unique_id = null;
    public function registerWebHook(Request $request){

        $this->unique_id = uniqid();
        $config = config_tables::first();
        if(!$config){
            return;
        }
        if ($config->webhook_id == null) {
            $config->update(['webhook_id' => $this->unique_id]);
        }else{
            $this->unique_id = $config->webhook_id;
        }

        $url_mode = env('MODE','online');

        $url = $url_mode == 'online' ? 'https://api.sms-gate.app/3rdparty/v1/webhooks' :
        "http://{$config->localaddress}:8080/webhooks";

        $response = Http::withBasicAuth($config->username, $config->password)
        ->post($url, [
            'id' => $this->unique_id,
            'url' => 'https://webhook.site/f600a175-ec87-44e0-93fa-c256785770f2',
            'event' => 'sms:received'
        ]);

        return back()->with([
            'flash' => [
                'title' => 'Success!',
                'message' => 'Webhook success!',
                'icon' => 'success',
                'response' => $response
            ]
        ]);
    }


    public function gatherData(){
        $response = Http::get('https://webhook.site/token/f600a175-ec87-44e0-93fa-c256785770f2/requests');
        //$requests = $response->json();

        return $response;
    }

    public function sendmessage(Request $request){




        if(config_tables::count() < 1){
            return response()->json([
                'flash' => [
                    'title' => 'Error!',
                    'message' => 'There\'s no configuration has been set.',
                    'icon' => 'error'
                ]
            ]);
        }


        $config = config_tables::first();

        $cloudconfig = cloudconfig::first();

        // FOR LOCAL HOST
        //  $response = Http::withBasicAuth('mjgwapo', 'ocWFMPKc')
        // ->withHeaders([
        //     'Content-Type' => 'application/json',
        // ])
        //     ->post("http://{$config->localaddress}:{$config->port}/message", [
        //         'message' => $request->message,
        //         'phoneNumbers' => $request->phoneNumbers,
        //         'simNumber' => 2,
        //     ]);

         $response = Http::withBasicAuth($cloudconfig->username, $cloudconfig->password)
        ->withHeaders([
            'Content-Type' => 'application/json',
        ])
        ->post("https://api.sms-gate.app/3rdparty/v1/message", [
            'message' => $request->message,
            'phoneNumbers' => $request->phoneNumbers,
            'simNumber' => 2,
        ]);

        try{
            DB::beginTransaction();
            foreach ($request->phoneNumbers as $phoneNum){
                messages::insert([
                    'fromnum' => '0927',
                    'tonum' => $phoneNum,
                    'message' => $request->message
                ]);
            }
            DB::commit();
        }
        catch(\Exception $er){
            DB::rollBack();
            return response()->json([
                'flash' => [
                    'title' => 'Error!',
                    'message' => 'Error occured: ' . $er->getMessage(),
                    'icon' => 'error'
                ]
            ]);
        }


         return response()->json([
                'flash' => [
                    'title' => 'Success!',
                    'message' => 'Message has been successfully sent!',
                    'icon' => 'success',
                    'response' => $response
                ]
            ]);
    }
}
