<?php

namespace App;

use App\Traits\BasicModel;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{

    use BasicModel;

    protected $fillable = array(
        'filename',
        'size',
        'ext',
    );

    public function save(array $options = array())
    {

        return parent::save($options);
    }


    public function delete()
    {
        $this->file()->delete();

        return parent::delete();
    }

    public function fajlok()
    {
        return $this->morphTo();
    }

    public function file($directory = null)
    {
        $fajl = new Fajlfeltoltes($this);
        if (!is_null($directory)) {
            $fajl->setUploadDirectory($directory);
        }
        return $fajl;
    }

    public function getFajlAttribute()
    {
        return $this->filename . '.' . $this->ext;
    }

    public function getMeretFormatAttribute()
    {
        return human_filesize($this->size, 0);
    }

    public function getKiterjesztesAttribute()
    {
        return strtoupper($this->ext);
    }

    public function hasFile($directory = null)
    {
        return $this->file($directory)->getFile() ? true : false;
    }
}
