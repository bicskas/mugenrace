<?php

namespace App;

use App\Kepfeltoltes;

class Fajlfeltoltes extends Kepfeltoltes
{

    public function fajlfeltoltes($fajl, array $params = array())
    {
        if (is_null($fajl) || !$fajl->isValid()) {
            return false;
        }

        if (!array_get($params, 'no_delete_dir')) {
            $this->deleteDirectory();
        }

        $fajlnev = str_slug(pathinfo($fajl->getClientOriginalName(), PATHINFO_FILENAME), '_');
        $ext = strtolower($fajl->getClientOriginalExtension());
        $meret = $fajl->getClientSize();

        $file = $fajlnev . '.' . $ext;
        $dir = $this->getUploadDirectory();

        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }
        $upload = $fajl->move($dir, $file);

        if (!array_get($params, 'no_save_prop')) {
            if ($upload && $this->getRelated()) {
                $this->getRelated()->update(array(
                    'filename' => $fajlnev,
                    'ext' => $ext,
                    'size' => $meret,
                ));
            }
        }

        return $upload;
    }

    public function getFile()
    {
        $file = $this->getUploadDirectory() . $this->getFajl();
        if (file_exists($file) && is_file($file)) {
            return str_replace(public_path(), '', $file);
        }
        return false;
    }

    public function getFajl()
    {
        return $this->getRelated()->filename . '.' . $this->getRelated()->ext;
    }

}
