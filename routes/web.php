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
    Route::get('/home', 'HomeController@index')->name('main');

    Auth::routes(['verify' => true, 'register' => false,'reset' => false]);

    Route::prefix('/admin')->middleware(['admin', 'verified'])->namespace('Admin')->group(function () {
        Route::get('/', 'SzovegController@index')->name('adminhome');
        Route::resource('szoveg', 'SzovegController', [
            'as' => 'admin'
        ])->parameters([
            'szoveg' => 'szoveg'
        ]);

        Route::resource('about', 'AboutController', [
            'as' => 'admin'
        ]);

        Route::resource('team', 'TeamController', [
            'as' => 'admin'
        ]);

        Route::resource('rider', 'RiderController', [
            'as' => 'admin'
        ]);

        Route::resource('title', 'TitleController', [
            'as' => 'admin'
        ])->except(['create', 'store', 'show']);

        Route::resource('belso_kep', 'BelsoKepController', [
            'as' => 'admin'
        ]);

        Route::resource('belso_szoveg', 'BelsoSzovegController', [
            'as' => 'admin'
        ]);

        Route::resource('download', 'DownloadController', [
            'as' => 'admin'
        ]);

        Route::resource('seo', 'SeoController', [
            'as' => 'admin'
        ])->only(['index', 'edit', 'update']);

        Route::get('/kep/torol/{snake_case}/{id}/{method}', 'KepController@getTorol');
        Route::post('ajax/sorrend/{one?}/{two?}/', 'AjaxController@sorrend');
        Route::post('tesztbezar', 'AjaxController@tesztbezar');

        Route::resource('file', 'FileController')->only(['destroy']);
        Route::get('/file/torol/{file}', 'FileController@destroy')->name('file.delete');
        Route::get('subscribe', 'SubscribeController')->name('admin.subscribe');
    });

    Route::get('about-us', 'AboutController')->name('about');
    Route::get('sponsored', 'SponsoredController')->name('sponsor');
    Route::get('downloads', 'DownloadController')->name('download');
    Route::post('subscribe', 'SubscribeController')->name('subscribe');

    Route::get('products', function () {
        return redirect("http://www.mugenraceshop.com");
    })->name('products');


// ----- Szöveges oldalak -----
    Route::bind('szoveg_link', function ($link) {
        $model = App\Szoveg::whereTranslation('link', $link)->first();
        return $model ?: abort(404);
    });
    Route::get('{szoveg_link}', array('as' => 'szoveg', 'uses' => 'SzovegController@index'));
});
