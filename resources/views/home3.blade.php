@extends('layouts.app')

@section('body_class','homepage demo-7')
@section('content')
    <div id="home-page">
        <div id="content" class="content">
            <div id="slider" data-images='[
            @foreach($home_images as $image)
            @if(Browser::isMobile())
                "{!! $image->getImage(0.56,700) !!}"
                @else
                "{!! $image->getImage(1.92, 3840) !!}"
                @endif
            @if(!$loop->last)
                ,
@endif
            @endforeach
                ]' data-disp="
                @if(Browser::isMobile())
            {!! $home_images[0]->getImage(0.56,700)  !!}
            @else
            {!! $home_images[0]->getImage(1.92, 3840)  !!}
            @endif
            {!! $home_images[0]->getImage(1.92, 3840)  !!}
                ">
            </div>
        </div>
        <a id="slider-text" class="cr-titles">
            @foreach($home_images as $image)
                <h3 class="@if($loop->first) active @endif"><span class="title">{!! $titles->where('place',$image->place)->first()->title !!}</span><span class="subtitle">{!! $titles->where('place',$image->place)->first()->subtitle !!}</span></h3>
            @endforeach
        </a>
        <div class="footer-svg svg-div svg-top svg">
            {!! inline_svg('images/line-1deg.svg') !!}
        </div>
    </div>
@endsection

@push('scripts')
    <script src="js/webgl/three.js"></script>
    <script src="js/webgl/dat-gui.js"></script>
    <script src="js/webgl/gsap.js"></script>
    <script src="js/webgl/sketch.js"></script>
    <script src="{{ mix('js/webgl-transition.js') }}"></script>
@endpush
