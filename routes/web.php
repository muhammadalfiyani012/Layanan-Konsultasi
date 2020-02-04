<?php

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

Route::get('index', function () {
    return view('index');
 });

Route::get('Service', function () {
    return view('Service');
});

Route::get('About', function () {
    return view('About');
});

Route::get('Gallery', function () {
    return view('Gallery');
});

Route::get('Contact', function () {
    return view('Contact');
});

Route::get('Request', function () {
    return view('Request');
});