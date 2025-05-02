<?php

namespace App\Http\Controllers;

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
}