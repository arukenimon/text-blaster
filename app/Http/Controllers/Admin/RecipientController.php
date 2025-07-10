<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\contacts;
use App\Models\segments;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipientController extends Controller
{
    //

    public function index(){
        return Inertia::render("Authenticated/Recipients",[
            'allrecipients' => contacts::with(['segment'])->get(),
            'allsegments' => segments::all()->map(function($segment){
                return [
                    'ID' => $segment->id,
                    'id' => $segment->segment,
                    'label' => $segment->description,
                    'count' => $segment->contacts->count()
                ];
            })
        ]);
    }
}
