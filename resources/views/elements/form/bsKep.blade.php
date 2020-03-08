<?php $method = (isset($method) && $method) ? $method : $id ?>
<div class="form-group">
    {!! Form::label($id, labels($id), ['class' => 'control-label']) !!}
    {!! Form::file($id, ['id' => $id, 'class' => 'form-control', 'placeholder' => labels($id)]) !!}
</div>
@if ($model->$method()->getImage())
    <a href="{{url('/admin/kep/torol/' . $model->className() . '/' . $model->id . '/' . $method)}}" class="confirm btn btn-danger btn-xs">
        <span class="glyphicon glyphicon-trash"></span> Töröl
    </a>
    {!! Html::image($model->$method()->getImage() . '?r=' . rand(0,1000), '', ['class' => 'img-fluid center-block']) !!}
@endif
