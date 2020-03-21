<?php

namespace App;

use App\Traits\BasicModel;
use Illuminate\Database\Eloquent\Model;

class SeoTranslation extends Model
{

    use BasicModel;

    protected $fillable = array(
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
            'seotitle' => array(
                'required',
            ),
            'seodescription' => array(
                'required',
            ),
        );
    }

    public function save(array $options = array()) {
        if (empty($this->ogtitle)) {
            $this->ogtitle = $this->seotitle;
        }

        if (empty($this->ogdescription)) {
            $this->ogdescription = $this->seodescription;
        }

        return parent::save($options);
    }
}
