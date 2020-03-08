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


// Main GET routes with locale
Route::prefix('{lang?}')->middleware('locale')->group(function () {

    Route::get('/', 'HomeController@index')->name('home');
    Route::get('/home', 'HomeController@index')->name('home');

    Auth::routes(['verify' => true, 'register' => false]);

    Route::prefix('/admin')->middleware(['admin', 'verified'])->namespace('Admin')->group(function () {
        Route::get('/', 'SzovegController@index')->name('home');
        Route::resource('szoveg', 'SzovegController', [
            'as' => 'admin'
        ])->parameters([
            'szoveg' => 'szoveg'
        ]);

        Route::resource('about', 'AboutController', [
            'as' => 'admin'
        ]);
    });

    Route::get('about-us', 'AboutController')->name('about');
});
