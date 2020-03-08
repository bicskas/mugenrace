@php($error_class = '')
@error($id)
@php($error_class = 'is-invalid')
@enderror

<?php

$attributes = $attributes + array(
        'id' => $id,
        'class' => "form-control datetimepicker-input " . $error_class,
        'placeholder' => labels($id),
        'data-toggle' => 'datetimepicker',
        'data-target' => '#' . $id
    );

?>
<?php $type = array_get($attributes, 'type', 'text') ?>

<div class="form-group row">
    {!! Form::label($id,labels($id), ['class' => "control-label col-sm-1"]) !!}
    <div class="input-group col-sm-4">
        {!! Form::$type($id, $model->$id, $attributes) !!}
        <div class="input-group-append" data-target="#{{$id}}" data-toggle="datetimepicker">
            <span class="input-group-text" id="{{$id}}-append"><i class="fas fa-calendar-alt"></i></span>
        </div>
        @if ($help)
            <span class="help-block">{!! $help !!}</span>
        @endif


    </div>
</div>
