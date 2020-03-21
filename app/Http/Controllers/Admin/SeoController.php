<?php

namespace App\Http\Controllers\Admin;

use App\Seo;
use App\Fajl;
use App\File;
use App\Http\Requests\ModelRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SeoController extends TemplateController
{

    /**
     * @var string
     */
    private $class;

    public function __construct()
    {
        parent::__construct();

        $this->class = 'seo';
        \View::share('active_page', $this->class);
        \View::share('Class', new Seo());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request, $lang, Seo $seo)
    {

        $list = Seo::orderByRaw(Seo::$sorting)->paginate(15);
        return view('admin.' . $this->class . '.list', array(
            'list' => $list->appends($request->except('page')), // lapozó miatt!
        ));
    }

    private function save(ModelRequest $request, Seo $seo)
    {

        $data = $request->all();

        $seo->fill($data)->save();

        return redirect($seo->adminLink() . '/edit')
            ->with('uzenet', __('Sikeres mentés!'));
    }

    private function szerkeszt(Seo $seo, $method)
    {
        return view('admin.' . $this->class . '.form', array(
                'model' => $seo,
                'method' => $method,
            ) + $this->locales($seo));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create($lang, Seo $seo)
    {
        return $this->szerkeszt($seo, 'post');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ModelRequest $request, $lang, Seo $seo)
    {
        return $this->save($request, $seo);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Seo $seo
     * @return \Illuminate\Http\Response
     */
    public function show($lang, Seo $seo)
    {
        return view('admin.' . $this->class . '.show', array(
            'model' => $seo,
        ));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Seo $seo
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $lang, Seo $seo)
    {
        if (($locale = $request->get('uj_nyelv'))) {
            return $this->uj_nyelv($locale, $seo);
        }
        return $this->szerkeszt($seo, 'put');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @param \App\Seo $seo
     * @return \Illuminate\Http\Response
     */
    public function update(ModelRequest $request, $lang, Seo $seo)
    {
        return $this->save($request, $seo);
    }

//    /**
//     * Remove the specified resource from storage.
//     *
//     * @param \App\Seo $seo
//     * @return \Illuminate\Http\Response
//     */
//    public function destroy($lang, Seo $seo)
//    {
//        $seo->fajlok()->delete();
//        $seo->delete();
//        return array(
//            'id' => $seo->getKey(),
//        );
//    }
}
