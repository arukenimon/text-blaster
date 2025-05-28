<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class segments extends Model
{
    //
    public function contacts(){
        return $this->hasMany(contacts::class,'segmentid','id');
    }
}
