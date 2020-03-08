<?php

namespace App\Http\Controllers;

use App\About;
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
        return view('about.list')->with(compact(['abouts']));
    }
}
