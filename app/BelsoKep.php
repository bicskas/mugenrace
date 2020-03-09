<?php

namespace App;

use App\Traits\BasicModel;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

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

    public function delete() {
        $this->image()->delete();
        return parent::delete();
    }

    public function getImage($ar = null, $w = null)
    {
        return $this->image()->getImage($ar, $w);
    }
}
