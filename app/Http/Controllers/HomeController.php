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
//        $images = BelsoKep::orderByRaw(BelsoKep::$sorting)->get();
//        $home_images = collect();
//        foreach ($images->groupBy('place') as $group) {
//            $home_images->push($group->random(1)->first());
//        }
////dd($images, $home_images);

        $home_images = BelsoKep::orderByRaw(BelsoKep::$sorting)->get();
        return view('home')->with(compact(['home_images']));
    }
}
