<?php $attributes = $attributes + array(
        'id' => $id . $value,
        'class' => 'form-check-input',
    );
?>

<div class="form-check">
    {!! Form::checkbox($id.'[]', $value, $model->$id, $attributes) !!}
    {!! Form::label($id.$value, __($label), ['class' => 'control-label']) !!}
    @if ($help)
        <span class="help-block">{!! $help !!}</span>
    @endif
</div>
