<?php

namespace App\Http\Controllers;

use App\BelsoKep;
use App\Download;
use App\Title;
use Illuminate\Http\Request;

class DownloadController extends Controller
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
        $page_title = Title::wherePlace('download')->inRandomOrder()->first();
        $page_image = BelsoKep::wherePlace('download')->inRandomOrder()->first();
        $download_categories = Download::orderByRaw(Download::$sorting)->get()->groupBy('category');

        shareSeo($page_title->title, $page_image, $page_title->seo()->exists() ? $page_title->seo : null);

        return view('download')->with(compact(['page_title','page_image', 'download_categories']));
    }
}
