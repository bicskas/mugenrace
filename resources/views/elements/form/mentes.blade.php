@php
    $icon = isset($attributes['icon']) ?  $attributes['icon']: 'fas fa-save';
    $class = isset($attributes['class']) ?  $attributes['class']: 'btn btn-primary';
    $name = isset($attributes['name']) ?  'name='.$attributes['name']: '';
    $value = isset($attributes['value']) ?  'value='.$attributes['value'] : '';
    $text = isset($attributes['text']) ? $attributes['text'] : 'Mentés';
@endphp

<div class="form-group">
    <button type="submit" class="{{$class}}" {{$name.' '.$value}}>
        <span class="{{$icon}}"></span>@icon($icon) {{$text}}
    </button>
</div>
