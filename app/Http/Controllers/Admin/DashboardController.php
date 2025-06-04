<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\config_tables;
use App\Models\contacts;
use App\Models\segments;
use App\Models\templates;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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
            'config' => config_tables::get()[0] ?? [],
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
            'localaddr' => "required",
            'port' => "required",
            'user' => "required",
            'pw' => "required",
        ]);

        config_tables::updateOrInsert(
['id' => config_tables::first()?->id ?? null],
[
            "localaddress"=> $request->localaddr,
            "port"=> $request->port,
            "username"=> $request->user,
            "password"=> $request->pw,
        ]);


        return back()->with([
            'flash' => [
                'title' => 'Success!',
                'message' => 'Config successfully saved!',
                'icon' => 'success'
            ]
        ]);
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


         $response = Http::withBasicAuth('mjgwapo', 'ocWFMPKc')
        ->withHeaders([
            'Content-Type' => 'application/json',
        ])
            ->post("http://{$config->localaddress}:{$config->port}/message", [
                'message' => $request->message,
                'phoneNumbers' => $request->phoneNumbers,
                'simNumber' => 2,
            ]);


        return $response->json();
    }
}