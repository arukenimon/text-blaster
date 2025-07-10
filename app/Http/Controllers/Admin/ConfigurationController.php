<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\cloudconfig;
use App\Models\config_tables;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConfigurationController extends Controller
{
    //

    public function index(){
        return Inertia::render("Authenticated/Configure",[
            'config' => config_tables::get()[0] ?? [],
            'cloudconfig' => cloudconfig::get()[0] ?? [],
        ]);
    }
}
