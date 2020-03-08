<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use View;

abstract class TemplateController extends BaseController {

	use ValidatesRequests;

	public function __construct() {

		View::share('active_page', '');
		$this->nyelvek = config('app.locales');
		View::share('nyelvek', $this->nyelvek);

	}

	/**
	 * létrehozza az új fordítást a model-hez.
	 * ha az edit-et 'uj_nyelv' paraméterrel hívják meg
	 * @param string $locale nyelvi kód, $request->get('uj_nyelv')
	 * @param Object $model a model
	 * @return Response
	 */
	protected function uj_nyelv($locale, $model) {
		if (!$model->hasTranslation($locale)) {
			$tr = $model->getTranslationModelName();
			$t = new $tr();

			\DB::table($t->getTable())->insert(array(
				$model->getRelationKey() => $model->id,
				$model->getLocaleKey() => $locale,
			));
		}
		return redirect()->back();
	}

	/**
	 * szétválogatja a locale-kat.
	 * hozzá kell adni a szerkeszt view-hoz.
	 * locales: megjelenik, locales2: választható.
	 * @param Object $model a model
	 * @return array array(locales, locales2)
	 */
	protected function locales($model) {
		$locales = array();
		$locales2 = array();
		foreach ($this->nyelvek as $kod => $nyelv) {
			if ($model->hasTranslation($kod) || (config('translatable.use_fallback') && config('translatable.fallback_locale') == $kod)) {
				$locales[$kod] = $nyelv;
			} else {
				$locales2[$kod] = $nyelv;
			}
		}
		return array(
			'locales' => $locales,
			'locales2' => $locales2,
		);
	}

}
