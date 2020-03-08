<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\BasicModel;

class SzovegTranslation extends Model {

	use BasicModel;

	protected $table = 'szoveg_translation';
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
	public static $sorting = '`id` ASC';

	protected function rules() {
		return array(
			'cim' => array(
				'required',
				'max:255',
			),
		);
	}

	public function save(array $options = array()) {
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

}
