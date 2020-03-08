<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class AjaxController extends TemplateController
{

    public function sorrend($lang, Request $request, $model)
    {

        parse_str($request->get('data'), $array);
        $i = 1;
        $array = array_pop($array);

        $className = '\\App\\' . studly_case($model);
        $model = new $className;
        foreach ($array as $a) {
            $model
                ->find($a)
                ->update(array(
                    'sorrend' => $i++
                ));
        }
    }

    public function tesztbezar()
    {
        Cookie::queue('tesztoldal', 'letezik', 30);
    }

}
