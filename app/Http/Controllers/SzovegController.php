<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Szoveg as Model;
use Illuminate\Support\Str;

class SzovegController extends Controller
{

    public function index($lang, Model $model)
    {

        \View::share('active_menu', Str::slug($model->cim));

        return view('szoveg', array(
            'model' => $model,
            'title' => $model->cim,
        ));
    }

}
