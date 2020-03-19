<?php

namespace App;

use App\Traits\BasicModel;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class BelsoKep extends Model
{
    use BasicModel, Translatable;

    public $translatedAttributes = array(
        'title',
        'subtitle',
    );
    protected $fillable = array(
        'title',
        'subtitle',
        'crops',
        'sorrend',
        'place',
    );

    protected $casts = [
        'place' => 'enum',
        'crops' => 'array',
    ];

    public $timestamps = true;
    public static $sorting = '`sorrend` ASC';

    private $enum = array(
        'place' => array('home', 'about', 'sponsor','produtcs','subpage','download'),
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


    public function image()
    {
        return new Kepfeltoltes($this);
    }

    public function delete()
    {
        $this->image()->delete();
        return parent::delete();
    }

    public function getImage($ar = null, $w = null)
    {
        return $this->image()->getImage($ar, $w);
    }
}
