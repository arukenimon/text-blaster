<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class contacts extends Model
{
    //

    protected $fillable = [
        'name','contactno','segment','description'
    ];


    public function segment(){
        return $this->belongsTo(segments::class,'segmentid');
    }
}