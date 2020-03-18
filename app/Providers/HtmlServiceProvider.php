<?php

namespace App\Providers;

use Form;

class HtmlServiceProvider extends \Collective\Html\HtmlServiceProvider
{

    public function boot()
    {
        $dir = 'elements.form.';

        Form::component('bsText', $dir . 'bsText', ['id', 'model', 'attributes' => [], 'help' => '']);
        Form::component('bsDate', $dir . 'bsDate', ['id', 'model', 'attributes' => [], 'help' => '']);
        Form::component('bsTextarea', $dir . 'bsTextarea', ['id', 'model', 'attributes' => [], 'help' => '']);
        Form::component('bsSelect', $dir . 'bsSelect', ['id', 'model', 'options' => [], 'attributes' => [], 'help' => '']);
        Form::component('bsCheckbox', $dir . 'bsCheckbox', ['id', 'model', 'value' => 1, 'label', 'attributes' => [], 'help' => '']);
        Form::component('bsCheckboxWithText', $dir . 'bsCheckboxWithText', ['id', 'model', 'value' => 1, 'label', 'attributes' => [], 'help' => '', 'textName', 'textValue', 'textAttributes' => []]);
        Form::component('bsRadio', $dir . 'bsRadio', ['id', 'model', 'value' => 1, 'attributes' => [], 'help' => '']);
        Form::component('bsFile', $dir . 'bsFile', ['id', 'model']);
        Form::component('bsFiles', $dir . 'bsFiles', ['id', 'model', 'number' => 1, 'related' => 'fajlok']);
        Form::component('bsKep', $dir . 'bsKep', ['id', 'model']);
        Form::component('bsJcrop', $dir . 'bsJcrop', ['id', 'model']);
        Form::component('bsDropzone', $dir . 'bsDropzone', ['model', 'keplista' => '.keplista']);

        Form::component('seo', $dir . 'seo', ['model']);

        Form::component('bsTextMl', $dir . 'bsTextMl', ['kod', 'id', 'model', 'attributes' => [], 'help' => '']);
        Form::component('bsTextareaMl', $dir . 'bsTextareaMl', ['kod', 'id', 'model', 'attributes' => [], 'help' => '']);
        Form::component('bsNavTabsMl', $dir . 'bsNavTabsMl', ['model', 'locales' => [], 'locales2' => [], 'tovabbiak' => []]);

        Form::component('mentes', $dir . 'mentes', ['attributes' => []]);
        Form::component('draft', $dir . 'draft', []);
    }

}
