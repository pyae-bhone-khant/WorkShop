<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return [
        'message' => 'welcome from Nextjs laravel workshop'
    ];
});
