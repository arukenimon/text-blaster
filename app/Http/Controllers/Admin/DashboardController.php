<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\contacts;
use App\Models\segments;
use App\Models\templates;
use Illuminate\Http\Request;

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
}