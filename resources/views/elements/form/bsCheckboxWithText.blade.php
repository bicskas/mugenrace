<?php $attributes = $attributes + array(
        'id' => $id . $value,
        'class' => '',
    );
?>

{{--<div class="form-check">--}}
{{--    {!! Form::checkbox($id.'[]', $value, $model->$id, $attributes) !!}--}}
{{--    {!! Form::label($id.$value, __($label), ['class' => 'control-label']) !!}--}}
{{--    {!! Form::text($id."[][$textName]", '', $textAttributes) !!}--}}
{{--    @if ($help)--}}
{{--        <span class="help-block">{!! $help !!}</span>--}}
{{--    @endif--}}
{{--</div>--}}

<div class="input-group mb-2">
    <div class="input-group-prepend">
        <label class="input-group-text" for="{{$id.$value}}">
            {!! Form::checkbox($id.'[]', $value, $model->$id, $attributes) !!}
            @lang($label)
            {{--            {!! Form::label($id.$value, __($label), ['class' => 'my-0 ml-3']) !!}--}}
        </label>

    </div>
    {!! Form::text($id.ucfirst($textName)."[$value]", $textValue, $textAttributes) !!}
    @if ($help)
        <span class="help-block">{!! $help !!}</span>
    @endif
</div>
