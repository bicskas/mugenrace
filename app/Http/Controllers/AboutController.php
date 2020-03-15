<?php

namespace App\Http\Controllers;

use App\About;
use App\BelsoKep;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function __invoke(Request $request)
    {
        $abouts = About::orderByRaw(About::$sorting)->get();
        $image = BelsoKep::wherePlace('about')->inRandomOrder()->first();
//        dd(view('about.list')->with(compact(['abouts','image']))->render());
        return view('about.list')->with(compact(['abouts','image']));
    }
}
