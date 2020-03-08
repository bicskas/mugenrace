<?php

namespace App\Http\Controllers\Admin;

use App\Szoveg as Model;
use App\Http\Requests\ModelRequest;
use Illuminate\Http\Request;

class SzovegController extends TemplateController {

	public function __construct() {
		parent::__construct();

		$this->class = 'szoveg';
		\View::share('active_page', $this->class);
	}

	public function index(Request $request, $lang, Model $model) {

		$model = $model->listsTranslations('cim');

		if (($data = $request->get('cim'))) {
			$model = $model->whereTranslationLike('cim', '%' . $data . '%');
		}

		$lis = $model
			->orderByRaw(Model::$sorting)
			->paginate(15);

		return view('admin.' . $this->class . '.list', array(
			'list' => $lis->appends($request->except('page')), // lapozó miatt!
		));
	}

	private function save(ModelRequest $request, Model $model) {

		$data = $request->all();

		$model->fill($data)->save();

//		$model->kep()->kepfeltoltes($request->file('kep'));

		return redirect($model->adminLink() . '/edit')
			->with('uzenet', __('Sikeres mentés!'));
	}

	private function szerkeszt(Model $model, $method) {

		return view('admin.' . $this->class . '.form', array(
			'model' => $model,
			'method' => $method,
		) + $this->locales($model));
	}

	public function show($lang, Model $model) {
		return view('admin.' . $this->class . '.show', array(
			'model' => $model,
		));
	}

	public function store(ModelRequest $request, $lang, Model $model) {
        return $this->save($request, $model);
	}

	public function update(ModelRequest $request, $lang, Model $model) {
		return $this->save($request, $model);
	}

	public function edit(Request $request, $lang, Model $model) {
//	    dd($model);
		if (($locale = $request->get('uj_nyelv'))) {
			return $this->uj_nyelv($locale, $model);
		}

		return $this->szerkeszt($model, 'put');
	}

	public function create($lang, Model $model) {
		return $this->szerkeszt($model, 'post');
	}

	public function destroy($lang, Model $model) {
		$model->kep()->delete();
		$model->delete();
		return array(
			'id' => $model->getKey(),
		);
	}
}
