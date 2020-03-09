<?php

namespace App\Http\Controllers\Admin;

use App\BelsoKep;
use App\Http\Requests\ModelRequest;
use Illuminate\Http\Request;

class BelsoKepController extends TemplateController
{

    /**
     * @var string
     */
    private $class;

    public function __construct()
    {
        parent::__construct();

        $this->class = 'belso_kep';
        \View::share('active_page', $this->class);
        \View::share('Class', new BelsoKep());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request, $lang, BelsoKep $belso_kep)
    {
        $model = $belso_kep->listsTranslations('title');

        if (($data = $request->get('title'))) {
            $model = $model->whereTranslationLike('title', '%' . $data . '%');
        }

        $list = $model
            ->orderByRaw(BelsoKep::$sorting)
            ->paginate(15);

        return view('admin.' . $this->class . '.list', array(
            'list' => $list->appends($request->except('page')), // lapozó miatt!
        ));
    }

    private function save(ModelRequest $request, BelsoKep $belso_kep)
    {

        $data = $request->all();

        if (!$belso_kep->sorrend) {
            $data['sorrend'] = (int)BelsoKep::max('sorrend') + 1;
        }

        $belso_kep->fill($data)->save();

        $belso_kep->image()->kepfeltoltes($request->file('image'));
        $belso_kep->image()->cropolas($request->get('_crops', array()));

        return redirect($belso_kep->adminLink() . '/edit')
            ->with('uzenet', __('Sikeres mentés!'));
    }

    private function szerkeszt(BelsoKep $belso_kep, $method)
    {

        return view('admin.' . $this->class . '.form', array(
                'model' => $belso_kep,
                'method' => $method,
            ) + $this->locales($belso_kep));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create($lang, BelsoKep $belso_kep)
    {
        return $this->szerkeszt($belso_kep, 'post');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ModelRequest $request, $lang, BelsoKep $belso_kep)
    {
        return $this->save($request, $belso_kep);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\BelsoKep $belso_kep
     * @return \Illuminate\Http\Response
     */
    public function show($lang, BelsoKep $belso_kep)
    {
        return view('admin.' . $this->class . '.show', array(
            'model' => $belso_kep,
        ));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\BelsoKep $belso_kep
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $lang, BelsoKep $belso_kep)
    {
        if (($locale = $request->get('uj_nyelv'))) {
            return $this->uj_nyelv($locale, $belso_kep);
        }

        return $this->szerkeszt($belso_kep, 'put');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @param \App\BelsoKep $belso_kep
     * @return \Illuminate\Http\Response
     */
    public function update(ModelRequest $request, $lang, BelsoKep $belso_kep)
    {
        return $this->save($request, $belso_kep);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\BelsoKep $belso_kep
     * @return \Illuminate\Http\Response
     */
    public function destroy($lang, BelsoKep $belso_kep)
    {
        $belso_kep->image()->delete();
        $belso_kep->delete();
        return array(
            'id' => $belso_kep->getKey(),
        );
    }
}
