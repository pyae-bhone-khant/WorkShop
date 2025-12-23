<?php

use App\Http\Controllers\Api\RecipeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// get all recipes 
Route::get('/recipes' , [RecipeController::class, 'index']);

// get single recipes 
Route::get('/recipes/{recipe}' , [RecipeController::class , 'show']);

// delete single recipes 
Route::delete('/recipes/{recipe}' , [RecipeController::class , 'destory']);
