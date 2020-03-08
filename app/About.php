<?php

namespace App;

use App\Traits\BasicModel;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use BasicModel, Translatable;

    public $translatedAttributes = array(
        'title',
        'subtitle',
        'content',
        'seotitle',
        'seokeywords',
        'seodescription',
        'ogtitle',
        'ogdescription',
    );

    public $timestamps = true;
    public static $sorting = '`title` ASC';


    public function image()
    {
        return new Kepfeltoltes($this);
    }
}
