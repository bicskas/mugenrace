<?php

namespace App\Http\Controllers\Admin;

use App\Download;
use App\Fajl;
use App\File;
use App\Http\Requests\ModelRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DownloadController extends TemplateController
{

    /**
     * @var string
     */
    private $class;

    public function __construct()
    {
        parent::__construct();

        $this->class = 'download';
        \View::share('active_page', $this->class);
        \View::share('Class', new Download());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request, $lang, Download $download)
    {
        $model = $download->withTranslation('title');

        if (($data = $request->get('title'))) {
            $model = $model->whereTranslationLike('title', '%' . $data . '%');
        }

        $list = $model
            ->orderByRaw(Download::$sorting)
            ->paginate(15);
        return view('admin.' . $this->class . '.list', array(
            'list' => $list->appends($request->except('page')), // lapozó miatt!
        ));
    }

    private function save(ModelRequest $request, Download $download)
    {

        $data = $request->all();

        $download->fill($data)->save();

        $files = $request->file('file');

        if (!is_null($files)) {
            foreach ($files as $upload) {
                $file = new File();
                $download->fajlok()->save($file);
                $file->file()->fajlfeltoltes($upload);
            }
        }

        return redirect($download->adminLink() . '/edit')
            ->with('uzenet', __('Sikeres mentés!'));
    }

    private function szerkeszt(Download $download, $method)
    {
        $categories = $download->getCategory();
        return view('admin.' . $this->class . '.form', array(
                'model' => $download,
                'method' => $method,
                'categories' => $categories,
            ) + $this->locales($download));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create($lang, Download $download)
    {
        return $this->szerkeszt($download, 'post');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ModelRequest $request, $lang, Download $download)
    {
        return $this->save($request, $download);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Download $download
     * @return \Illuminate\Http\Response
     */
    public function show($lang, Download $download)
    {
        return view('admin.' . $this->class . '.show', array(
            'model' => $download,
        ));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Download $download
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $lang, Download $download)
    {
        if (($locale = $request->get('uj_nyelv'))) {
            return $this->uj_nyelv($locale, $download);
        }
        return $this->szerkeszt($download, 'put');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\ModelRequest $request
     * @param \App\Download $download
     * @return \Illuminate\Http\Response
     */
    public function update(ModelRequest $request, $lang, Download $download)
    {
        return $this->save($request, $download);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Download $download
     * @return \Illuminate\Http\Response
     */
    public function destroy($lang, Download $download)
    {
        $download->fajlok()->delete();
        $download->delete();
        return array(
            'id' => $download->getKey(),
        );
    }
}
