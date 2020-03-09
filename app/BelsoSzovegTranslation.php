<?php

namespace App;

use App\Traits\BasicModel;
use Illuminate\Database\Eloquent\Model;

class BelsoSzovegTranslation extends Model
{
    use BasicModel;

    public $timestamps = false;
    public static $sorting = '`id` ASC';
    protected $fillable = array(
        'title',
        'content',
    );

    protected function rules()
    {
        return array(
            'title' => array(
                'required',
                'max:255',
            ),
        );
    }
}
