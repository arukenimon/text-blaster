<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\messages;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnalyticsController extends Controller
{
    //
    public function index(){
        return Inertia::render("Authenticated/Analytics",
        ['messages' => messages::get(),]);
    }
}
