<?php

namespace App\Http\Controllers;

use App\BelsoKep;
use Illuminate\Http\Request;

class HomeController extends Controller
{


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $home_images = BelsoKep::orderByRaw(BelsoKep::$sorting)->get();
        return view('home')->with(compact(['home_images']));
    }
}
