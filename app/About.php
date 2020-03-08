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
    );
    protected $fillable = array(
        'title',
        'subtitle',
        'content',
        'crops',
        'sorrend',
    );

    protected $casts = [
        'crops' => 'array',
    ];

    public $timestamps = true;
    public static $sorting = '`sorrend` ASC';


    public function image()
    {
        return new Kepfeltoltes($this);
    }

    public function delete(array $options = array()) {
        $this->image()->delete();
        return parent::save($options);
    }

    public function getImage($ar = null, $w = null)
    {
        return $this->image()->getImage($ar, $w);
    }


}
