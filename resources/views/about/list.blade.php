@extends('layouts.app')
@section('page-title',ucfirst($page_image->title))

@section('content')
    <div id="page-header">
        {!! Html::image($page_image->getImage(2.065,3840), 'a',['class' => 'img-fluid wow slideInRight','data-wow-delay' => '5300ms']) !!}
        <div class="page-image-content wow slideInLeft" data-wow-delay="5300ms">
            <h2 class="title">{!! $page_image->title !!}</h2>
            <h4 class="subtitle">{!! $page_image->subtitle !!}</h4>
        </div>
    </div>

    @foreach($abouts as $about)
                <section class="about-section">
                    <div class="about-title d-flex align-items-end @if($loop->even) primary @endif">
                        <h2>
                            {!! $about->title !!}
                            <span>{!! $about->subtitle !!}</span>
                        </h2>
                        {!! inline_svg('images/arrow-top-down.svg') !!}
                    </div>
                    <div class="about-content d-flex align-content-center ">
                        <div class="about-content-text flex-50">
                            {!! $about->content !!}
                        </div>

                        <div class="about-content-image">{!! Html::image($about->getImage(1.48,2300),$about->title,['class' => 'img-fluid t']) !!}</div>
                    </div>
                </section>
    @endforeach
@endsection
