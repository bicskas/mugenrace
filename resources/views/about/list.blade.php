@extends('layouts.app')

@section('content')
    <div class="page-image wow lightSpeedIn fast">
        {!! Html::image($image->getImage(2.77,600),$image->title,['class' => '']) !!}
    </div>
    <div class="container">
        <div class="about-content-list d-flex flex-column">

            @foreach($abouts as $about)
                <div class="about-content-item d-flex align-items-center">
                    <div class="about-content-item-text flex-50 wow slideInLeft">
                        <p>{!! $about->title !!}</p>
                        <p>{!! $about->subtitle !!}</p>
                        {!! $about->content !!}
                    </div>

                    <div class="about-content-item-image flex-50 wow slideInRight">{!! Html::image($about->getImage(2.77,600),$about->title,['class' => 'img-fluid']) !!}</div>
                </div>
                <hr>
            @endforeach
        </div>
    </div>
@endsection
