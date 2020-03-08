<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ModelRequest;
use App\Rider;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RiderController extends TemplateController
{

    /**
     * @var string
     */
    private $class;

    public function __construct()
    {
        parent::__construct();

        $this->class = 'rider';
        \View::share('active_page', $this->class);
        \View::share('Class', new Rider());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request, $lang, Rider $rider)
    {
        $model = $rider->listsTranslations('name');

        if (($data = $request->get('name'))) {
            $model = $model->whereTranslationLike('name', '%' . $data . '%');
        }

        $list = $model
            ->orderByRaw(Rider::$sorting)
            ->paginate(15);

        return view('admin.' . $this->class . '.list', array(
            'list' => $list->appends($request->except('page')), // lapozó miatt!
        ));
    }

    private function save(ModelRequest $request, Rider $rider)
    {

        $data = $request->all();

        if (!$rider->sorrend) {
            $data['sorrend'] = (int)Rider::max('sorrend') + 1;
        }

        $rider->fill($data)->save();

        $rider->image()->kepfeltoltes($request->file('image'));
        $rider->image()->cropolas($request->get('_crops', array()));

        return redirect($rider->adminLink() . '/edit')
            ->with('uzenet', __('Sikeres mentés!'));
    }

    private function szerkeszt(Rider $rider, $method)
    {

        return view('admin.' . $this->class . '.form', array(
                'model' => $rider,
                'method' => $method,
            ) + $this->locales($rider));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create($lang, Rider $rider)
    {
        return $this->szerkeszt($rider, 'post');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(ModelRequest $request, $lang, Rider $rider)
    {
        return $this->save($request, $rider);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Rider $rider
     * @return \Illuminate\Http\Response
     */
    public function show($lang, Rider $rider)
    {
        return view('admin.' . $this->class . '.show', array(
            'model' => $rider,
        ));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Rider $rider
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(Request $request, $lang, Rider $rider)
    {
        if (($locale = $request->get('uj_nyelv'))) {
            return $this->uj_nyelv($locale, $rider);
        }

        return $this->szerkeszt($rider, 'put');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @param \App\Rider $rider
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(ModelRequest $request, $lang, Rider $rider)
    {
        return $this->save($request, $rider);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Rider $rider
     * @return array
     */
    public function destroy($lang, Rider $rider)
    {
        $rider->image()->delete();
        $rider->delete();
        return array(
            'id' => $rider->getKey(),
        );
    }
}
