<?php

namespace App;

use App\Traits\BasicModel;
use Illuminate\Database\Eloquent\Model;

class DownloadTranslation extends Model
{

    use BasicModel;

    protected $fillable = array(
        'title',
        'format',
    );
    public $timestamps = false;
    public static $sorting = '`id` ASC';

    protected function rules()
    {
        return array(
            'title' => array(
                'required',
                'max:255',
            ),

            'format' => array(
                'required',
                'max:255',
            ),
        );
    }

    public function save(array $options = array())
    {
        return parent::save($options);
    }

}
