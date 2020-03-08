<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ModelRequest;
use App\Team;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TeamController extends TemplateController
{

    /**
     * @var string
     */
    private $class;

    public function __construct()
    {
        parent::__construct();

        $this->class = 'team';
        \View::share('active_page', $this->class);
        \View::share('Class', new Team());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request, $lang, Team $team)
    {
        $model = $team->listsTranslations('name');

        if (($data = $request->get('name'))) {
            $model = $model->whereTranslationLike('name', '%' . $data . '%');
        }

        $list = $model
            ->orderByRaw(Team::$sorting)
            ->paginate(15);

        return view('admin.' . $this->class . '.list', array(
            'list' => $list->appends($request->except('page')), // lapozó miatt!
        ));
    }

    private function save(ModelRequest $request, Team $team)
    {

        $data = $request->all();

        if (!$team->sorrend) {
            $data['sorrend'] = (int)Team::max('sorrend') + 1;
        }

        $team->fill($data)->save();

        $team->image()->kepfeltoltes($request->file('image'));
        $team->image()->cropolas($request->get('_crops', array()));

        return redirect($team->adminLink() . '/edit')
            ->with('uzenet', __('Sikeres mentés!'));
    }

    private function szerkeszt(Team $team, $method)
    {

        return view('admin.' . $this->class . '.form', array(
                'model' => $team,
                'method' => $method,
            ) + $this->locales($team));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create($lang, Team $team)
    {
        return $this->szerkeszt($team, 'post');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(ModelRequest $request, $lang, Team $team)
    {
        return $this->save($request, $team);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Team $team
     * @return \Illuminate\Http\Response
     */
    public function show($lang, Team $team)
    {
        return view('admin.' . $this->class . '.show', array(
            'model' => $team,
        ));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Team $team
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(Request $request, $lang, Team $team)
    {
        if (($locale = $request->get('uj_nyelv'))) {
            return $this->uj_nyelv($locale, $team);
        }

        return $this->szerkeszt($team, 'put');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @param \App\Team $team
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(ModelRequest $request, $lang, Team $team)
    {
        return $this->save($request, $team);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Team $team
     * @return array
     */
    public function destroy($lang, Team $team)
    {
        $team->image()->delete();
        $team->delete();
        return array(
            'id' => $team->getKey(),
        );
    }
}
