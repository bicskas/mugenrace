@extends('admin.layouts.admin')

@section('content')
    <div class="card ">
        <div class="card-header clearfix">
            <h3 class="card-title pull-left">Edit content</h3>
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

                        <?php $id = 'cim' ?>
                        {!! Form::bsTextMl($kod, $id, $model, ['required']) !!}

                        <?php $id = 'link' ?>
                        {!! Form::bsTextMl($kod, $id, $model, [], 'Automatikusan generálódik, de felülírható') !!}

                        <?php $id = 'szoveg' ?>
                        {!! Form::bsTextareaMl($kod, $id, $model, ['class' => 'form-control ckeditor']) !!}

                        <div class="card">
                            <div class="card-heading" role="tab" id="headingSeo{{$kod}}" data-toggle="collapse" href="#collapseSeo{{$kod}}" aria-expanded="false" aria-controls="collapseSeo{{$kod}}">
                                <h4 class="card-title"><span class="caret"></span> SEO</h4>
                            </div>
                            <div id="collapseSeo{{$kod}}" class="card-collapse collapse" role="tabpanel" aria-labelledby="headingSeo{{$kod}}">
                                <div class="card-body">
                                    @foreach (['seotitle', 'seokeywords', 'seodescription', 'ogtitle', 'ogdescription'] as $id)
                                        {!! Form::bsTextMl($kod, $id, $model) !!}
                                    @endforeach
                                </div>
                            </div>
                        </div>
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
