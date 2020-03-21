<?php

namespace App\Http\Controllers;

use App\BelsoKep;
use App\Rider;
use App\Team;
use App\Title;
use Illuminate\Http\Request;

class SponsoredController extends Controller
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
        $page_title = Title::wherePlace('sponsor')->first();
        $page_image = BelsoKep::wherePlace('sponsor')->inRandomOrder()->first();
        $teams = Team::orderByRaw(Team::$sorting)->get();
        $riders = Rider::orderByRaw(Rider::$sorting)->get();

        shareSeo($page_title->title, $page_image, $page_title->seo()->exists() ? $page_title->seo : null);

        return view('sponsored.list')->with(compact(['page_title','page_image', 'teams', 'riders']));
    }
}
