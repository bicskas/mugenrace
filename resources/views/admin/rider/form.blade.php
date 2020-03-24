@extends('admin.layouts.admin')

@section('content')
    <div class="card ">
        <div class="card-header clearfix">
            <h3 class="card-title pull-left">Edit rider</h3>
            <div class="pull-right">
                @include('elements.buttons.adminBack')
            </div>
        </div>
        <div class="card-body">
            {!! Form::model($model, array('url' => $model->adminLink(), 'method' => $method, 'files' => true)) !!}
            {!! Form::hidden('_class_name', get_class($model)) !!}

            {!! Form::bsNavTabsMl($model, $locales, $locales2) !!}

            <div class="tab-content">
                @foreach ($locales as $kod => $nyelv)
                    <div role="tabpanel" class="tab-pane fade @if($loop->first) active show @endif" id="{{$kod}}">
                        {!! Form::hidden('_locales[]', $kod) !!}

                        <?php $id = 'name' ?>
                        {!! Form::bsTextMl($kod, $id, $model, ['required']) !!}

                        <?php $id = 'team' ?>
                        {!! Form::bsTextMl($kod, $id, $model, ['required']) !!}

                        <?php $id = 'race' ?>
                        {!! Form::bsTextMl($kod, $id, $model, ['required']) !!}


                    </div>
                @endforeach
            </div>
            <hr>
            <?php $id = 'year' ?>
            {!! Form::bsText($id, $model, []) !!}

            <hr>
            <?php $id = 'image' ?>
            {!! Form::bsJcrop($id, $model) !!}
            <hr>

            {!! Form::mentes() !!}

            {!! Form::close() !!}
        </div>
        <div class="card-footer">
        </div>
    </div>
@endsection
