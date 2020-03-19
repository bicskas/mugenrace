<?php

if (!function_exists('e')) {
    /**
     * Escape HTML entities in a string.
     *
     * @param string $value
     * @return string
     */
    function e($value)
    {
        return htmlspecialchars($value, ENT_QUOTES, 'UTF-8', false);
    }
}

if (!function_exists('inline_svg')) {
    /**
     * inline svg beszúrása
     * @param string $path file path
     * @return string file tartalom
     */
    function inline_svg($path)
    {
        return file_exists($path) ? preg_replace('/<\?xml.+\?>/', '', file_get_contents($path, true)) : false;
    }
}

if (!function_exists('url_get_contents')) {

    function url_get_contents($url, $post = null, $json_post = true)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        if ($post) {
            curl_setopt($ch, CURLOPT_POST, 1);
            if ($json_post) {
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post));
            } else {
                curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
            }
        }
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }
}

if (!function_exists('labels')) {
    function labels($mezo)
    {
        return ucfirst(__($mezo));
    }
}

function human_filesize($bytes, $decimals = 2)
{
    $sz = ' KMGTP';
    $factor = floor((strlen($bytes) - 1) / 3);
    return intval(sprintf("%.{$decimals}f", $bytes / pow(1024, $factor))) . @trim($sz[$factor]) . "B";
}

function belso_szoveg_hely_label($key)
{
    if (Lang::has('belso_szoveg.hely.' . $key)) {
        return trans('belso_szoveg.hely.' . $key);
    }
    return ucfirst($key);
}

function create_query_sting($query_array)
{
    $query_string = '';

    if (!empty($query_array)) {
//        $query_string .= '?';
        foreach ($query_array as $key => $value) {
            $query_string .= $query_string != '' ? '&' : '';
            $query_string .= $key . '=' . str_replace(',', '%2c', $value);
        }
    }

    return $query_string;
}

function getPaginateElementNumbers($model)
{
    if ($model->total() == 0) {
        $result = 0 . ' a(z) ' . $model->total();
    } else {
        $result = (($model->currentpage() - 1) * $model->perpage() + 1) . ' - ' . $model->currentpage() * $model->perpage() . ' a(z) ' . $model->total();
    }
    return $result;
}

function localeUrl($locale)
{

    $baseurl = url('/');
    $explodeUri = explode('/', \Request::getRequestUri());
    $explodeUri[1] = $locale;
    $uri = '';
    foreach ($explodeUri as $path) {
        if (!empty($path)) {
            $uri .= '/' . $path;
        }
    }
    $url = $baseurl . $uri;
    return $url;
}

function getLocales()
{
    $locales = [];
    foreach (config('app.locales') as $code => $locale) {
//        if ($code != app()->getLocale()) {
        $locales[$code] = $locale;
//        }
    }

    return $locales;
}
