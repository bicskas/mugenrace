<?php

namespace App;

use App\Traits\BasicModel;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class BelsoSzoveg extends Model
{

    use BasicModel, Translatable;

    public $translatedAttributes = array(
        'title',
        'content',
    );
    protected $fillable = array(
        'title',
        'content',
        'hely',
    );

    public $timestamps = true;
    public static $sorting = '`hely` ASC';
}
