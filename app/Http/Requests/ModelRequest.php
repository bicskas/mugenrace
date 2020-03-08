<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ModelRequest extends FormRequest
{

    protected $dontFlash = ['password', 'password_confirmation', '_locales'];

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $classname = $this->get('_class_name');
        if ($classname) {
            $cn = '\\' . $classname;
            $rules = $cn::rules();

            $model = new $cn;
            if ($model->translatedAttributes) {
                $cnf = '\\' . $model->getTranslationModelName();

                $locales = $this->get('_locales', array());
                if (config('translatable.use_fallback') && !in_array(config('translatable.fallback_locale'), $locales)) {
                    $locales[] = config('translatable.fallback_locale');
                }

                foreach ($locales as $kod) {
                    foreach ($cnf::rules() as $mezo => $rule) {
                        $rules[$kod . '.' . $mezo] = $rule;
                    }
                }
            }
            return $rules;
        }
        return array();
    }

//    public function attributes()
//    {
//        $array = array();
//        $attr = trans('validation.attributes');
//        foreach (config('app.locales') as $kod => $nyelv) {
//            foreach ($attr as $key => $value) {
//                $array[$kod . '.' . $key] = $value . ' (' . $nyelv . ')';
//            }
//        }
//        return $array + $attr;
//    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        $classname = $this->get('_class_name');
        if ($classname) {
            $cn = '\\' . $classname;
            return $cn::messages();
        }
        return array();
    }
}
