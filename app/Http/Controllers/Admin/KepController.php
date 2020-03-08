<?php

namespace App\Http\Controllers\Admin;

class KepController extends TemplateController
{

    public function getTorol($lang, $snake_case, $id, $method = 'kep')
    {
        $studly_case = '\\App\\' . studly_case($snake_case);

        $m = new $studly_case;
        if ($m) {
            $model = $m->find($id);
            if ($model && is_callable(array($model, $method))) {
                $kep = $model->$method();
                if ($kep && is_callable(array($kep, 'deleteDirectory'))) {
                    $kep->deleteDirectory();
                }
            }
        }

        return redirect()->back();
    }
}
