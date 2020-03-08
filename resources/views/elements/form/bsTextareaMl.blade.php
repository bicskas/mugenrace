<?php $attributes = $attributes + array(
	'id' => $kod . $id,
	'class' => 'form-control',
	'placeholder' => labels($id),
) ?>

<div class="form-group">
	{!! Form::label($kod . $id, labels($id), ['class' => 'control-label']) !!}
	{!! Form::textarea($kod . '[' . $id . ']', object_get($model->translate($kod), $id), $attributes) !!}
	@if ($help)
		<span class="help-block">{!! $help !!}</span>
	@endif
</div>
