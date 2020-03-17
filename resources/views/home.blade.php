@extends('layouts.app')

@section('body_class','homepage')
@section('content')
    <div id="home-page">
        <div class="home-page-header">
            <div class="home-page-slic">
                @foreach($home_images as $image)
                    <a href="{!! route($image->place, app()->getLocale()) !!}" id="bgdiv{!! $loop->iteration !!}"
                       class="bg-image  @if($loop->first) wow animated active bounceInRight @else hidden @endif"
                       data-index="{!! $loop->iteration !!}"
                       data-count="{!! $loop->count !!}"
                       data-image="{!! $image->getImage() !!}"
                       style="background-image: url('{!! $image->getImage() !!}')">
                        <div class="home-page-image-content">
                            <h2 class="title">{!! $image->title !!}</h2>
                            <h4 class="subtitle">{!! $image->subtitle !!}</h4>
                        </div>
                    </a>
                @endforeach
            </div>
        </div>
        <div class="footer-svg svg-div svg-top svg">
            {!! inline_svg('images/line-1deg.svg') !!}
        </div>
    </div>
@endsection
