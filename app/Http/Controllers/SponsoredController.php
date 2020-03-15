<?php

namespace App\Http\Controllers;

use App\BelsoKep;
use App\Rider;
use App\Team;
use Illuminate\Http\Request;

class SponsoredController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function __invoke(Request $request)
    {
        $page_image = BelsoKep::wherePlace('sponsor')->inRandomOrder()->first();
        $teams = Team::orderByRaw(Team::$sorting)->get();
        $riders = Rider::orderByRaw(Rider::$sorting)->get();
        return view('sponsored.list')->with(compact(['page_image', 'teams', 'riders']));
    }
}
