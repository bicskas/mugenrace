<?php

namespace App\Http\Controllers\Admin;

use App\Seo;
use App\Title;
use App\Http\Requests\ModelRequest;
use DemeterChain\B;
use Illuminate\Http\Request;

class TitleController extends TemplateController
{

    /**
     * @var string
     */
    private $class;

    public function __construct()
    {
        parent::__construct();

        $this->class = 'title';
        \View::share('active_page', $this->class);
        \View::share('Class', new Title());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request, $lang, Title $title)
    {

        $list = Title::orderByRaw(Title::$sorting)->paginate(15);

        return view('admin.' . $this->class . '.list', array(
            'list' => $list->appends($request->except('page')), // lapozó miatt!
        ));
    }

    private function save(ModelRequest $request, Title $title)
    {

        $data = $request->all();

        $title->fill($data)->save();
        if (!$title->seo()->exists()) {
            $seo = Seo::make();
            $title->seo()->save($seo);
        }

        return redirect($title->adminLink() . '/edit')
            ->with('uzenet', __('Sikeres mentés!'));
    }

    private function szerkeszt(Title $title, $method)
    {
        $places = $title->getPlaces();
        return view('admin.' . $this->class . '.form', array(
                'model' => $title,
                'method' => $method,
                'places' => $places,
            ) + $this->locales($title));
    }

//    /**
//     * Show the form for creating a new resource.
//     *
//     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
//     */
//    public function create($lang, Title $title)
//    {
//        return $this->szerkeszt($title, 'post');
//    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ModelRequest $request, $lang, Title $title)
    {
        return $this->save($request, $title);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Title $title
     * @return \Illuminate\Http\Response
     */
    public function show($lang, Title $title)
    {
        return view('admin.' . $this->class . '.show', array(
            'model' => $title,
        ));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Title $title
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $lang, Title $title)
    {
        if (($locale = $request->get('uj_nyelv'))) {
            return $this->uj_nyelv($locale, $title);
        }

        return $this->szerkeszt($title, 'put');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @param \App\Title $title
     * @return \Illuminate\Http\Response
     */
    public function update(ModelRequest $request, $lang, Title $title)
    {
        return $this->save($request, $title);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Title $title
     * @return \Illuminate\Http\Response
     */
    public function destroy($lang, Title $title)
    {
        $title->delete();
        return array(
            'id' => $title->getKey(),
        );
    }
}
