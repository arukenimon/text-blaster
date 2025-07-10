<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\templates;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ComposeController extends Controller
{
    //

    public function index(){

        return Inertia::render("Authenticated/Compose",[
            'templates' => templates::get(),
        ]);
    }
}