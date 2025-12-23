<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use Exception;
use Illuminate\Http\Request;

class RecipeController extends Controller
{   
    //   get all recipe 
    public function index()
    {
        try {
            return Recipe::filter(['category'])->paginate(6);
        } catch (Exception $e) {
            return response()->json([
                 'message ' => $e->getMessage(),
                "status" => 500
            ] , 500) ;
        }  
    }  

    //  get single recipe 
     public function show($id)
    {
        try {
            $recipe = Recipe::find($id);
         if(!$recipe) {
            return response() -> json ([
              "message" =>  " recipe not foung ",
              "status" => 404
            ] , 404) ;
         } 
          return $recipe;
        } catch (Exception $e) {
            return response()->json([
                 'message ' => $e->getMessage(),
                "status" => 500
            ] , 500) ;
        }
    }
    // Delete single receipe 
   public function destory () {
    dd('hit');
   }
}
