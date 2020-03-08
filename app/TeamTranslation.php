<?php

namespace App;

use App\Traits\BasicModel;
use Illuminate\Database\Eloquent\Model;

class TeamTranslation extends Model
{
    use BasicModel;

    public $timestamps = false;
    public static $sorting = '`id` ASC';
    protected $fillable = array(
        'name',
        'content',
    );

    protected function rules() {
        return array(
            'name' => array(
                'required',
                'max:255',
            ),
        );
    }
}
