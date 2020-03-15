<?php

namespace App;

use App\Traits\BasicModel;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use BasicModel, Translatable;

    public $translatedAttributes = array(
        'name',
        'content',
    );
    protected $fillable = array(
        'name',
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

    public function delete()
    {
        $this->image()->delete();
        return parent::delete();
    }

    public function getImage($ar = null, $w = null)
    {
        return $this->image()->getImage($ar, $w);
    }

    public function getImagebySrcSet($ar, $meretek)
    {
        $srcset = '';
        foreach ($meretek as $meret) {
            $srcset .= $this->image()->getImage($ar, $meret) . ' ' . $meret . 'w, ';
        }
        $srcset = rtrim($srcset, ', ');
        return $srcset;
    }
}
