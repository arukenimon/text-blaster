<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipientsController extends Controller
{
    //

    public function index(){
        return Inertia::render('Authenticated/RecipientSelector',[]);
    }
}