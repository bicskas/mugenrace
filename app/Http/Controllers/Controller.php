<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Session;
Use View;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct()
    {

//        View::share('seo_title', object_get($this->menu, 'seotitle'));
//        View::share('seo_key', object_get($this->menu, 'seokeywords'));
//        View::share('seo_desc', object_get($this->menu, 'seodescription'));
//        View::share('og_title', object_get($this->menu, 'ogtitle'));
//        View::share('og_desc', object_get($this->menu, 'ogdescription'));
//        View::share('og_image', $this->menu && $this->menu->kep()->getImage() ? url($this->menu->kep()->getImage()) : null);
    }
}
