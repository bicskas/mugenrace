<?php

namespace App;

use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;

class Kepfeltoltes
{

    private $related = null;
    private $className = '';
    private $uploadDirectory = '';
    private $fileName = 'original';
    private $kepmeretek = array();
    private $kivagasok_key = 'crops';
    private $placeholder = '';

    public function __construct($related = null)
    {
        $this->related = $related;
        if ($this->related) {
            $this->className = $this->related->className();
            $this->uploadDirectory = public_path('/userfiles/' . $this->className . '/' . $this->related->id . '/');
            $this->kepmeretek = config('kep.kepmeretek.' . $this->className, array());
            $this->fileName = $this->className;
        }
        $this->placeholder = config('kep.placeholder');
    }

    /**
     * $params = array(
     *   no_delete_dir
     *   no_resize
     *   no_auto_crop
     * )
     */
    public function kepfeltoltes($fajl, array $params = array())
    {
        if (is_null($fajl) || !$fajl->isValid()) {
            return false;
        }

        if (!array_get($params, 'no_delete_dir')) {
            $this->deleteDirectory();
        }

        $ext = strtolower($fajl->getClientOriginalExtension());
        $file = $this->getFileName() . '.' . $ext;
        $dir = $this->getUploadDirectory();

        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }
        $upload = $fajl->move($dir, $file);
        if (!array_get($params, 'no_resize')) {
            Image::make($dir . $file)
                ->resize(array_get($params, 'max_width', 1920), array_get($params, 'max_height', 1920), function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })
                ->save($dir . $file);

            if (array_get($params, 'thumbnail')) {
                Image::make($dir . $file)
                    ->resize(array_get($params, 'width', 150), array_get($params, 'height', 150), function ($constraint) {
                        $constraint->aspectRatio();
                        $constraint->upsize();
                    })
                    ->save(array_get($params, 'dir', $dir) . array_get($params, 'filename', 'th') . '.' . $ext);
            }
        }

        if (!array_get($params, 'no_auto_crop')) {
            $this->crop();
        }

        return $upload;
    }

    public function crop()
    {
        $dir = $this->getUploadDirectory();
        $file = $this->getImage();
        $ext = pathinfo($file, PATHINFO_EXTENSION);

        foreach ($this->getKepmeretek() as $ar => $widths) {
            foreach ($widths as $w) {
                $h = round($w / $ar);
                Image::make(public_path() . $file)
                    ->fit($w, $h)
                    ->save($dir . $w . 'x' . $h . '.' . $ext);
            }
        }
    }

    private function kivagasokHelper()
    {
        $related = $this->getRelated();
        $e = explode('.', $this->getKivagasokKey());
        $key = array_shift($e);
        $tobbi = count($e) > 0 ? implode('.', $e) : null;
        $tomb = $related->$key;

        return array(
            'key' => $key,
            'tomb' => $tomb,
            'tobbi' => $tobbi,
            'crops' => array_get($tomb, $tobbi, array()),
        );
    }

    private function setKivagasok(array $cropok)
    {
        $related = $this->getRelated();
        if (!$related) {
            return false;
        }

        $k = $this->kivagasokHelper();

        $tomb = array_get($k, 'tomb', array());
        $key = array_get($k, 'key');
        $related->$key = array_set($tomb, array_get($k, 'tobbi', null), $cropok);
        $related->save();
        return true;
    }

    public function cropolas(array $cropok)
    {
        $related = $this->getRelated();
        if (!$related) {
            return false;
        }

        $dir = $this->getUploadDirectory();
        foreach ($cropok as $key => $kivagas) {
            $cropok[$key] = json_decode($kivagas, true);
        }

        $k = array_get($this->kivagasokHelper(), 'crops', array());

        if ($k != $cropok) {
            $meretek = $this->getKepmeretek();
            $original = public_path() . $this->getImage();
            $ext = pathinfo($original, PATHINFO_EXTENSION);
            foreach ($cropok as $ar => $c) {
                if ($c['w'] > 0 && $c['h'] > 0) {
                    foreach (array_get($meretek, $ar, array()) as $width) {
                        $height = round($width / $ar);
                        Image::make($original)
                            ->crop(ceil($c['w']), ceil($c['h']), round($c['x']), round($c['y']))
                            ->widen($width)
                            ->crop($width, $height, 0, 0)
                            ->save($dir . $width . 'x' . $height . '.' . $ext, 85);
                    }
                }
            }

            $this->setKivagasok($cropok);
        }
        return true;
    }

    public function getKivagasok($key)
    {
        $related = $this->getRelated();
        $k = array_get($this->kivagasokHelper(), 'crops', array());

        if ($related && array_has($k, $key)) {
            return json_encode(array_get($k, $key));
        }
        $size = getimagesize(public_path() . $this->getImage());
        $original_size = array('x' => 0, 'y' => 0, 'x2' => $size[0], 'y2' => $size[1], 'w' => $size[0], 'h' => $size[1]);
        return json_encode($original_size);
    }

    public function getImage($ar = null, $w = null)
    {
        $dir = $this->getUploadDirectory();

        $file = $this->getFileName() . '.*';
        if (!is_null($ar) && !is_null($w)) {
            $h = round($w / $ar);
            $file = $w . 'x' . $h . '.*';
        }

        $files = glob($dir . $file);

        if (count($files) > 0) {
            return str_replace(public_path(), '', $files[0]);
        }

        if (isset($h)) {
            return 'https://placehold.it/' . $w . 'x' . $h . '?text=' . $this->getPlaceholder();
        }
        return false;
    }

    public function deleteDirectory()
    {

        $dir = $this->getUploadDirectory();

        return File::deleteDirectory($dir);
    }

    public function delete()
    {
        return $this->deleteDirectory();
    }

    public function getRelated()
    {
        return $this->related;
    }

    public function getClassName()
    {
        return $this->className;
    }

    public function getUploadDirectory()
    {
        return $this->uploadDirectory;
    }

    public function getKepmeretek()
    {
        return $this->kepmeretek;
    }

    public function getPlaceholder()
    {
        return $this->placeholder;
    }

    public function getFileName()
    {
        return $this->fileName;
    }

    public function getKivagasokKey()
    {
        return $this->kivagasok_key;
    }

    public function setKivagasokKey($kivagasok_key)
    {
        $this->kivagasok_key = $kivagasok_key;
    }

    public function setRelated($related)
    {
        $this->related = $related;
    }

    public function setClassName($className)
    {
        $this->className = $className;
    }

    public function setUploadDirectory($uploadDirectory)
    {
        $this->uploadDirectory = $uploadDirectory;
    }

    public function setKepmeretek(array $kepmeretek)
    {
        $this->kepmeretek = $kepmeretek;
    }

    public function setPlaceholder($placeholder)
    {
        $this->placeholder = $placeholder;
    }

    public function setFileName($fileName)
    {
        $this->fileName = $fileName;
    }

}
