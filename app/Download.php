<?php

namespace App;

use App\Traits\BasicModel;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Download extends Model
{

    use BasicModel,	Translatable;

    protected $table = 'szoveg';
    public $translatedAttributes = array(
        'title',
        'format',
    );
    protected $fillable = array(
        'title',
        'format',
        'type',
        'sorrend',
    );
    public $timestamps = false;
    public static $sorting = '`sorrend` ASC';

    private $enum = array(
        'type' => array('products', 'document'),
    );

    public function delete()
    {
        $this->fajlok()->delete();
        return parent::delete();
    }

    public function fajlok()
    {
        return $this->morphMany('App\File', 'file');
    }
}
