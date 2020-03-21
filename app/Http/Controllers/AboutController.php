<?php

namespace App\Http\Controllers;

use App\About;
use App\BelsoKep;
use App\Title;
use Illuminate\Http\Request;

class AboutController extends Controller
{

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function __invoke(Request $request)
    {
        $page_title = Title::wherePlace('about')->first();
        $page_image = BelsoKep::wherePlace('about')->inRandomOrder()->first();
        $abouts = About::orderByRaw(About::$sorting)->get();

        shareSeo($page_title->title, $page_image, $page_title->seo()->exists() ? $page_title->seo : null);

        return view('about.list')->with(compact(['abouts', 'page_title', 'page_image']));
    }
}
