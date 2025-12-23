<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Recipe; 

class Category extends Model
{
    use HasFactory ;

    // a categories has many recipes 

    public function recipes() {
        return $this->hasMany(Recipe::class);
    }
     

}
