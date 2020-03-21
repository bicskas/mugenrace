@extends('layouts.app')
@section('page-title',ucfirst($model->cim))


@section('content')
    <div id="page-header">
        {!! Html::image($model->getImage(1.92,3840), 'a',['class' => 'img-fluid wow slideInRight']) !!}
{{--        <div class="page-image-content wow slideInLeft">--}}
{{--            <h2 class="title">{!! $model->cim !!}</h2>--}}
{{--        </div>--}}
    </div>

    <section class="szoveg-section">
        <div class="szoveg-title d-flex align-items-end">
            <h2>
                {!! $model->cim !!}
            </h2>
            {!! inline_svg('images/arrow-top-down.svg') !!}
        </div>
        <div class="szoveg">
                {!! $model->szoveg !!}
        </div>
    </section>
@endsection
