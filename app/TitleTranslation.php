<?php

namespace App;

use App\Traits\BasicModel;
use Illuminate\Database\Eloquent\Model;

class TitleTranslation extends Model
{
    use BasicModel;

    public $timestamps = false;
    public static $sorting = '`id` ASC';
    protected $fillable = array(
        'title',
        'subtitle',
    );

    protected function rules()
    {
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
