<?php

namespace App;

use App\Traits\BasicModel;
use Illuminate\Database\Eloquent\Model;

class AboutTranslation extends Model
{
    use BasicModel;

    public $timestamps = false;
    public static $sorting = '`id` ASC';
    protected $fillable = array(
        'title',
        'subtitle',
        'content',
        'crops',
    );

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
