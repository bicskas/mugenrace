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
        if (empty($this->link)) {
            $this->link = str_slug($this->cim);
        }
        $this->link = str_slug($this->link);
        if (empty($this->seotitle)) {
            $this->seotitle = $this->cim;
        }
        if (empty($this->ogtitle)) {
            $this->ogtitle = $this->cim;
        }

        return parent::save($options);
    }

    public function getImage($ar = null, $w = null)
    {
        return $this->image()->getImage($ar, $w);
    }


}
