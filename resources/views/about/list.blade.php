@extends('layouts.app')
@section('page-title',ucfirst($page_title->title))

@section('content')
    <div id="page-header">
        {!! Html::image($page_image->getImage(2.065,3840), 'a',['class' => 'img-fluid wow slideInRight']) !!}
        <div class="page-image-content wow slideInLeft">
            <h2 class="title">{!! $page_title->title !!}</h2>
            <h4 class="subtitle">{!! $page_title->subtitle !!}</h4>
        </div>
    </div>

    @foreach($abouts as $about)
        <section class="about-section @if($loop->even) even @endif " id="section{!! $loop->iteration !!}">
            <div class="about-title d-flex align-items-end @if($loop->even) primary @endif">
                <h2>
                    {!! $about->title !!}
                    <span>{!! $about->subtitle !!}</span>
                </h2>
                {!! inline_svg('images/arrow-top-down.svg') !!}
            </div>
            <div class="about-content d-flex align-content-center">
                <div class="about-content-text @if($loop->even) even @endif flex-50" data-aos="fade-down-right"
                     data-aos-delay="100"
                     data-aos-duration="500"
                     data-aos-mirror="true"
                     data-aos-offset="10">
                    {!! $about->content !!}
                </div>

                <div class="about-content-image" data-aos="fade-up-left"
                     data-aos-delay="100"
                     data-aos-duration="500"
                     data-aos-mirror="true"
                     data-aos-offset="10">
                    {!! Html::image($about->getImage(1.48,2300),$about->title,['class' => 'img-fluid t']) !!}
                </div>
            </div>
        </section>
    @endforeach
@endsection
