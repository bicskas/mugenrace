<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\BasicModel;
use Dimsav\Translatable\Translatable;
use App\Kepfeltoltes;

class Szoveg extends Model {

	use BasicModel,	Translatable;

	protected $table = 'szoveg';
	public $translatedAttributes = array(
		'cim',
		'link',
		'szoveg',
		'seotitle',
		'seokeywords',
		'seodescription',
		'ogtitle',
		'ogdescription',
	);
	protected $fillable = array(
		'cim',
		'link',
		'szoveg',
		'seotitle',
		'seokeywords',
		'seodescription',
		'ogtitle',
		'ogdescription',
		'crops',
	);
	public $timestamps = false;
	public static $sorting = '`cim` ASC';

    protected $casts = [
        'crops' => 'array',
    ];

	protected function rules() {
		return array(
			'kep' => array(
				'image',
			),
		);
	}

    public function seo()
    {
        return $this->morphOne('App\Seo', 'seoable');
    }

	public function image() {
		return new Kepfeltoltes($this);
	}

    public function getImage($ar = null, $w = null)
    {
        return $this->image()->getImage($ar, $w);
    }

    public function delete()
    {
        $this->seo()->delete();
        $this->image()->delete();
        return parent::delete();
    }

	public function getLink() {
		$prefix = \App::getLocale() != config('app.fallback_locale') ? \App::getLocale() : '';
		return url($prefix . '/' . $this->link);
	}
}
