<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/login', function(){
    return view( 'authorization' );
})->where('path', '.*');

Route::get('/app/{path?}', function(){
    return view( 'app' );
})->where('path', '.*');

Route::get('/', function() {
    return "Hello world";
});