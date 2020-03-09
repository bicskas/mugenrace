<?php

namespace App\Http\Controllers\Admin;

use App\BelsoSzoveg;
use App\Http\Requests\ModelRequest;
use Illuminate\Http\Request;

class BelsoSzovegController extends TemplateController
{

    /**
     * @var string
     */
    private $class;

    public function __construct()
    {
        parent::__construct();

        $this->class = 'belso_szoveg';
        \View::share('active_page', $this->class);
        \View::share('Class', new BelsoSzoveg());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request, $lang, BelsoSzoveg $belso_szoveg)
    {
        $model = $belso_szoveg->listsTranslations('title');

        if (($data = $request->get('title'))) {
            $model = $model->whereTranslationLike('title', '%' . $data . '%');
        }

        $list = $model
            ->orderByRaw(BelsoSzoveg::$sorting)
            ->paginate(15);
        return view('admin.' . $this->class . '.list', array(
            'list' => $list->appends($request->except('page')), // lapozó miatt!
        ));
    }

    private function save(ModelRequest $request, BelsoSzoveg $belso_szoveg)
    {

        $data = $request->all();

        $belso_szoveg->fill($data)->save();

        return redirect($belso_szoveg->adminLink() . '/edit')
            ->with('uzenet', __('Sikeres mentés!'));
    }

    private function szerkeszt(BelsoSzoveg $belso_szoveg, $method)
    {

        return view('admin.' . $this->class . '.form', array(
                'model' => $belso_szoveg,
                'method' => $method,
            ) + $this->locales($belso_szoveg));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create($lang, BelsoSzoveg $belso_szoveg)
    {
        return $this->szerkeszt($belso_szoveg, 'post');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ModelRequest $request, $lang, BelsoSzoveg $belso_szoveg)
    {
        return $this->save($request, $belso_szoveg);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\BelsoSzoveg $belso_szoveg
     * @return \Illuminate\Http\Response
     */
    public function show($lang, BelsoSzoveg $belso_szoveg)
    {
        return view('admin.' . $this->class . '.show', array(
            'model' => $belso_szoveg,
        ));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\BelsoSzoveg $belso_szoveg
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $lang, BelsoSzoveg $belso_szoveg)
    {
        if (($locale = $request->get('uj_nyelv'))) {
            return $this->uj_nyelv($locale, $belso_szoveg);
        }

        return $this->szerkeszt($belso_szoveg, 'put');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @param \App\BelsoSzoveg $belso_szoveg
     * @return \Illuminate\Http\Response
     */
    public function update(ModelRequest $request, $lang, BelsoSzoveg $belso_szoveg)
    {
        return $this->save($request, $belso_szoveg);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\BelsoSzoveg $belso_szoveg
     * @return \Illuminate\Http\Response
     */
    public function destroy($lang, BelsoSzoveg $belso_szoveg)
    {
        $belso_szoveg->image()->delete();
        $belso_szoveg->delete();
        return array(
            'id' => $belso_szoveg->getKey(),
        );
    }
}
