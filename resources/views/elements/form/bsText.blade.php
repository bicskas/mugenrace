@php($error_class = '')
@error($id)
@php($error_class = 'is-invalid')
@enderror

<?php
if (isset($attributes['prepend'])) {
    $prepend = $attributes['prepend'];
    unset($attributes['prepend']);
}

if (isset($attributes['append'])) {
    $append = $attributes['append'];
    unset($attributes['append']);
}


$attributes = $attributes + array(
        'id' => $id,
        'class' => "form-control " . $error_class,
        'placeholder' => labels($id),
    );

?>
<?php $type = array_get($attributes, 'type', 'text') ?>

<div class="form-group">
    {!! Form::label($id,labels($id), ['class' => "control-label "]) !!}
    @isset($prepend)
        <div class="input-group-prepend">
            <span class="input-group-text" id="{{$id}}-prepend">{!! $prepend !!}</span>
        </div>
    @endisset
    {!! Form::$type($id, $model->$id, $attributes) !!}
    @if ($help)
        <span class="help-block">{!! $help !!}</span>
    @endif

    @isset($append)
        <div class="input-group-append">
            <span class="input-group-text" id="{{$id}}-append">{!! $append  !!}</span>
        </div>
    @endisset
</div>
