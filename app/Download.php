<?php

namespace App;

use App\Traits\BasicModel;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Download extends Model
{

    use BasicModel,	Translatable;

    public $translatedAttributes = array(
        'title',
        'format',
    );
    protected $fillable = array(
        'title',
        'format',
        'category',
        'sorrend',
    );
    public $timestamps = false;
    public static $sorting = '`category` ASC, `sorrend` ASC';

    private $enum = array(
        'category' => array('catalogs', 'documents'),
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

    public function getCategory()
    {
        $places = $this->enum('category');
        $placesWithName = [];
        foreach ($places as $place) {
            $placesWithName[$place] = ucfirst(__($place));

        }

        return $placesWithName;
    }
}
