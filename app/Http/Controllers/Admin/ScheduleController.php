<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    //

    public function index(){
        return Inertia::render("Authenticated/Schedule");
    }
}