<?php

namespace App;

use App\Traits\BasicModel;
use Illuminate\Database\Eloquent\Model;

class RiderTranslation extends Model
{
    use BasicModel;

    public $timestamps = false;
    public static $sorting = '`id` ASC';
    protected $fillable = array(
        'name',
        'team',
        'race',
        'content',
    );

    protected function rules() {
        return array(
            'name' => array(
                'required',
                'max:255',
            ),
            'team' => array(
                'required',
                'max:255',
            ),
            'race' => array(
                'required',
                'max:255',
            ),
        );
    }
}
