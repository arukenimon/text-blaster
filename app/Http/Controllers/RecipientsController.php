<?php

namespace App\Http\Controllers;

use App\Models\contacts;
use App\Models\segments;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class RecipientsController extends Controller
{
    //


    public function index(){
        return Inertia::render('Authenticated/RecipientSelector',[]);
    }

    public function getsegment(segments $segment){
        //$contact->load('segment');
        return response()->json([
            // 'segments' => [],
            'segment' => $segment->segment,'description' => $segment->description
        ]);
    }

    public function storeNewContacts(Request $request){
        $request->validate([
            'contacts'=> 'required|array',
            'contacts.*.phone' => 'required|unique:contacts,contactno',
            'contacts.*.segment' => 'required|exists:segments,id',
        ]);
        DB::beginTransaction();
        try{
            foreach($request->contacts as $contact){
                contacts::insert([
                    'name' => $contact['name'],
                    'contactno' => $contact['phone'],
                    'segmentid' => $contact['segment'] ?? 1,
                    //'description' => $contact['description'] ?? "",
                ]);
            }

            DB::commit();
        }
        catch(\Exception $e){
            DB::rollBack();
            return back()->with([
                'flash' => ['title' => 'Error!', 'message' => 'Error Occured: ' . $e->getMessage(), 'icon' => 'error'],
            ]);
        }

        return back()->with([
            'flash' => ['title' => 'Success!', 'message' => 'Contacts Saved Successfully!', 'icon' => 'success'],
        ]);
    }
}
