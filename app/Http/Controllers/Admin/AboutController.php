<?php

namespace App\Http\Controllers\Admin;

use App\About;
use App\Http\Requests\ModelRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AboutController extends TemplateController
{

    /**
     * @var string
     */
    private $class;

    public function __construct()
    {
        parent::__construct();

        $this->class = 'about';
        \View::share('active_page', $this->class);
        \View::share('Class', new About());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request, $lang, About $about)
    {
        $model = $about->listsTranslations('title');

        if (($data = $request->get('title'))) {
            $model = $model->whereTranslationLike('title', '%' . $data . '%');
        }

        $list = $model
            ->orderByRaw(About::$sorting)
            ->paginate(15);

        return view('admin.' . $this->class . '.list', array(
            'list' => $list->appends($request->except('page')), // lapozó miatt!
        ));
    }

    private function save(ModelRequest $request, About $about)
    {

        $data = $request->all();

        if (!$about->sorrend) {
            $data['sorrend'] = (int)About::max('sorrend') + 1;
        }

        $about->fill($data)->save();

        $about->image()->kepfeltoltes($request->file('image'));
        $about->image()->cropolas($request->get('_crops', array()));

        return redirect($about->adminLink() . '/edit')
            ->with('uzenet', __('Sikeres mentés!'));
    }

    private function szerkeszt(About $about, $method)
    {

        return view('admin.' . $this->class . '.form', array(
                'model' => $about,
                'method' => $method,
            ) + $this->locales($about));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create($lang, About $about)
    {
        return $this->szerkeszt($about, 'post');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ModelRequest $request, $lang, About $about)
    {
        return $this->save($request, $about);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\About $about
     * @return \Illuminate\Http\Response
     */
    public function show($lang, About $about)
    {
        return view('admin.' . $this->class . '.show', array(
            'model' => $about,
        ));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\About $about
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $lang, About $about)
    {
        if (($locale = $request->get('uj_nyelv'))) {
            return $this->uj_nyelv($locale, $about);
        }

        return $this->szerkeszt($about, 'put');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @param \App\About $about
     * @return \Illuminate\Http\Response
     */
    public function update(ModelRequest $request, $lang, About $about)
    {
        return $this->save($request, $about);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\About $about
     * @return \Illuminate\Http\Response
     */
    public function destroy(About $about)
    {
        $about->image()->delete();
        $about->delete();
        return array(
            'id' => $about->getKey(),
        );
    }
}
