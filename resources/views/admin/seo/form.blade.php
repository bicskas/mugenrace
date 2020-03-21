@extends('admin.layouts.admin')

@section('content')
    <div class="card ">
        <div class="card-header clearfix">
            <h3 class="card-title pull-left">Edit seo</h3>
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
                        @foreach (['seotitle', 'seokeywords', 'seodescription', 'ogtitle', 'ogdescription'] as $id)
                            @if($id == 'seotitle' or $id == 'seodescription')
                                {!! Form::bsTextMl($kod, $id, $model,['required']) !!}
                            @else
                                {!! Form::bsTextMl($kod, $id, $model) !!}
                            @endif
                        @endforeach
                    </div>
                @endforeach
            </div>


            <hr>

            {!! Form::mentes() !!}

            {!! Form::close() !!}
        </div>
        <div class="card-footer">
        </div>
    </div>
@endsection
