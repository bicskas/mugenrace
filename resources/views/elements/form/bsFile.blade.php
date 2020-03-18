<div class="form-group">
    {!! Form::label($id, labels($id), ['class' => 'control-label']) !!}
    {!! Form::file($id, ['id' => $id, 'class' => 'form-control', 'placeholder' => labels($id)]) !!}
</div>
@if ($model->fajlok()->getFile())
    <a href="/admin/file/torol/{{$model->className()}}/{{$model->id}}" class="confirm btn btn-danger btn-xs">
        <span class="glyphicon glyphicon-trash"></span> Töröl
    </a>
    {!! Html::image($model->fajlok()->getFile() . '?r=' . rand(0,1000), '', ['class' => 'img-responsive center-block']) !!}
@endif
