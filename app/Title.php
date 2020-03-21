<?php

namespace App;

use App\Traits\BasicModel;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    use BasicModel, Translatable;

    public $translatedAttributes = array(
        'title',
        'subtitle',
    );
    protected $fillable = array(
        'title',
        'subtitle',
    );
    public static $sorting = '`place` ASC';

    private $enum = array(
        'place' => array('home', 'about', 'sponsor', 'products', 'download'),
    );


    public function getPlaces()
    {
        $places = $this->enum('place');
        $placesWithName = [];
        foreach ($places as $place) {
            $placesWithName[$place] = ucfirst(__($place));

        }

        return $placesWithName;
    }

    public function seo()
    {
        return $this->morphOne('App\Seo', 'seoable');
    }

    protected function rules()
    {
        return array(
            'place' => array(
                'sometimes',
                'in:' . implode(',', $this->enum('place')),
            ),
            'image' => array(
                'image',
            ),
        );
    }

//    public function delete()
//    {
//        $this->image()->delete();
//        return parent::delete();
//    }
}
