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
	);
	public $timestamps = false;
	public static $sorting = '`cim` ASC';

	protected function rules() {
		return array(
			'kep' => array(
				'image',
			),
		);
	}

    public function seo()
    {
        return $this->morphMany('App\Seo', 'seoable');
    }

	public function kep() {
		return new Kepfeltoltes($this);
	}

	public function getLink() {
		$prefix = \App::getLocale() != config('app.fallback_locale') ? \App::getLocale() : '';
		return url($prefix . '/' . $this->link);
	}
}
