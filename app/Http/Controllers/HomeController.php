<?php

namespace App\Http\Controllers;

use App\BelsoKep;
use App\Title;
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
        $titles = Title::whereIn('place', ['home', 'about', 'sponsor', 'products'])->orderByRaw(Title::$sorting)->get();
        $images = BelsoKep::whereIn('place', ['home', 'about', 'sponsor', 'products'])->orderByRaw(BelsoKep::$sorting)->get();
        $page_title = Title::wherePlace('home')->first();
        $page_image = BelsoKep::wherePlace('home')->inRandomOrder()->first();
        $home_images = collect();
        foreach ($images->groupBy('place') as $group) {
            $home_images->push($group->random(1)->first());
        }
//dd($images, $home_images);

//        $home_images = BelsoKep::orderByRaw(BelsoKep::$sorting)->take(6)->get();
        shareSeo($page_title->title, $page_image, $page_title->seo()->exists() ? $page_title->seo : null);
        return view('home2')->with(compact(['home_images', 'titles']));
    }
}
