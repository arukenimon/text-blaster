<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AccountSettingsController extends Controller
{
    //
    public function index(){

        return Inertia::render("Authenticated/AccountSettings");
    }
    public function change_pw(Request $request){
        $request->validate([
            'current_password' => "required|current_password",
            'password' => 'required|min:4',
            'confirmpw' => "required|same:password",
        ]);
        // $request->validate([
        //     'current_password' => 'required|current_password', // Field must match Laravel's convention
        //     'password'         => 'required|min:8|confirmed|different:current_password',
        //     // 'password_confirmation' is auto-checked by 'confirmed' rule
        // ], [
        //     'current_password.current_password' => 'The current password is incorrect.',
        //     'password.different'               => 'New password must differ from the old one.'
        // ]);

        // Update password
        Auth::user()->update([
            'password' => Hash::make($request->password)
        ]);


        return back()->with([
            'flash' => [
                'title' => 'Success!',
                'message' => 'Email successfully saved!',
                'icon' => 'success'
            ]
        ]);
    }
    public function change_email(Request $request){
        $request->validate([
            'email' => 'required|email|min:3|max:255|unique:users,email,' . Auth::id()
        ]);

        $user = Auth::user();
        $user->email = $request->email;
        $user->email_verified_at = null; // Require re-verification
        $user->save();

        return back()->with([
            'flash' => [
                'title' => 'Success!',
                'message' => 'Email successfully saved!',
                'icon' => 'success'
            ]
        ]);
    }
}
