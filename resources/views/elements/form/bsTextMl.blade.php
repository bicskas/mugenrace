<?php $attributes = $attributes + array(
	'id' => $kod . $id,
	'class' => 'form-control',
	'placeholder' => labels($id),
) ?>
<?php $type = array_get($attributes, 'type', 'text') ?>

<div class="form-group">
	{!! Form::label($kod . $id, labels($id), ['class' => 'control-label']) !!}
	{!! Form::$type($kod . '[' . $id . ']', object_get($model->translate($kod), $id), $attributes) !!}
	@if ($help)
		<span class="help-block">{!! $help !!}</span>
	@endif
</div>
