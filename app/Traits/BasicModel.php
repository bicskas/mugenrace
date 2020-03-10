<?php

namespace App\Traits;

use Illuminate\Support\Arr;

trait BasicModel
{


    public function scopeOrdered($query)
    {
        return $query->orderByRaw(self::$sorting);
    }

    public function scopeAdminOrdered($query)
    {
        $as = isset(self::$adminSorting) ? self::$adminSorting : self::$sorting;
        return $query->orderByRaw($as);
    }

    protected function rules()
    {
        return array();
    }

    public function adminLink()
    {
        return url('/' . app()->getLocale() . '/admin/' . $this->className() . '/' . $this->getRouteKey(), [], true);
    }

    public function adminRoute($action)
    {
        return route('admin.' . $this->className() . '.' . $action, [$this->className() => $this->getRouteKey()]);
    }

    public function className()
    {
        return snake_case(class_basename(__CLASS__));
    }

    protected function enum($param = null)
    {
        if (is_null($param)) {
            return $this->enum;
        }
        return Arr::get($this->enum, $param, array());
    }

    protected function messages()
    {
        return [];
    }

    public function getName()
    {
        $name = "";
        if (isset($this->name)) {
            $name = $this->name;
        } elseif (isset($this->title)) {
            $name = $this->title;
        }
        return $name;
    }
}
