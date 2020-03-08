<?php

namespace App;

use App\Traits\BasicModel;
use Illuminate\Database\Eloquent\Model;

class AboutTranslation extends Model
{
    use BasicModel;

    public static $sorting = '`id` ASC';

    protected function rules() {
        return array(
            'title' => array(
                'required',
                'max:255',
            ),

            'subtitle' => array(
                'max:255',
            ),
        );
    }

}
