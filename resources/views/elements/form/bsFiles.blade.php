@for($i = 1; $i <= $number; $i++)
    @if (!empty($model->fajlok[$i-1]) and $model->fajlok[$i-1]->hasFile())

        <div class="my-3">
            {!! Html::link($model->fajlok[$i-1]->file()->getFile(), $model->fajlok[$i-1]->fajl) !!} ({{$model->kiterjesztes}} {{$model->fajlok[$i-1]->meret_format}})
            <a href="{{ route('fajl.delete',['fajl' => $model->fajlok[$i-1]->id])  }}" class="confirm btn btn-danger btn-xs">
                <span class="glyphicon glyphicon-trash"></span> Töröl
            </a>
        </div>

    @else
        <div class="form-group">
            {!! Form::label($id.$i, labels($id), ['class' => '']) !!}
            {!! Form::file($id.'[]', ['id' => $id.$i, 'class' => 'form-control-file']) !!}
        </div>
    @endif
@endfor

