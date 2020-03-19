<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subscribe extends Model
{
    protected $fillable = array(
        'email',
    );

    public $timestamps = true;
    protected function rules() {
        return array(
            'email' => array(
                'required',
                'email',
            ),
        );
    }
}
