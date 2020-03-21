<?php

namespace App;

use App\Traits\BasicModel;
use Dimsav\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Seo extends Model
{

    use BasicModel, Translatable;

    public $translatedAttributes = array(
        'seotitle',
        'seokeywords',
        'seodescription',
        'ogtitle',
        'ogdescription',
    );

    protected $fillable = array(
        'seotitle',
        'seokeywords',
        'seodescription',
        'ogtitle',
        'ogdescription',
    );

    public static $sorting = '`id` ASC';

    /**
     * Get the owning imageable model.
     */
    public function seoable()
    {
        return $this->morphTo();
    }

    public function getTitle()
    {
        $model = $this->seoable;
        $title = '';
        if (isset($model->title)) {
            $title = $model->title;
        } elseif (isset($model->cim)) {
            $title = $model->cim;
        }

        return $title;
    }
}
