<div class="form-group">
    {!! Form::label($id, labels($id), ['class' => 'control-label']) !!}
    {!! Form::file($id, ['id' => $id, 'class' => 'form-control', 'placeholder' => labels($id)]) !!}
</div>
@if ($model->$id()->getImage())
    <a href="{{url('/'.app()->getLocale().'/admin/kep/torol/' . $model->className() . '/' . $model->id . '/' . $id)}}" class="confirm btn btn-danger btn-xs">
        <span class="glyphicon glyphicon-trash"></span> Töröl
    </a>
    @foreach ($model->$id()->getKepmeretek() as $ar => $widths)
        <div class="form-group">
            <label>1:{{$ar}} arány</label>
            {!! Html::image($model->$id()->getImage(), '', ['class' => 'img-fluid jcrop', 'data-aspect-ratio' => $ar, 'data-selection' => $model->$id()->getKivagasok($ar)]) !!}
        </div>
    @endforeach
@endif
