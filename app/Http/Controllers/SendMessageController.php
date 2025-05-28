<?php

namespace App\Http\Controllers;

use App\Jobs\SendSmsJob;
use App\Models\templates;
use App\Services\InfobipService;
use App\Services\TransmitSMSService;
use Illuminate\Http\Request;
use Twilio\Rest\Client;

class SendMessageController extends Controller
{
    //


    public function sendMessage(Request $request)
    {
        $request->validate([
            'message' => 'required',
            'recipients' => 'required|array'
        ]);
        $account_sid = getenv("TWILIO_SID");
        $auth_token = getenv("TWILIO_AUTH_TOKEN");
        $twilio_number = getenv("TWILIO_NUMBER");

        $client = new Client($account_sid, $auth_token);

        foreach($request->recipients as $recipient){
            $client->messages->create($recipient['phone'],
                ['from' => $twilio_number, 'body' => $request->message] );
        }
    }

    public function saveTemplate (Request $request){

        $request->validate([
            'template' => 'required:min:3',
            'content' => 'required:min:3',
        ]);

        templates::insert([
            'templatename' => $request->template,
            'content' => $request->content
        ]);

        return back()->with(['flash' => ['message' => 'Template Saved!',
        'title' => 'Success!', 'icon' => 'success']]);
    }
}
