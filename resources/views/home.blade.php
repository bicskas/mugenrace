@extends('layouts.app')

@section('body_class','homepage')
@section('content')
    <div id="home-page">
        <div class="home-page-header">
            <div class="home-page-slic">
                @foreach($home_images as $image)
                    <div id="bgdiv{!! $loop->iteration !!}"
                         class="bg-image  @if($loop->first) wow animated active bounceInRight @endif"
                         data-index="{!! $loop->iteration !!}"
                         data-count="{!! $loop->count !!}"
                         data-image="{!! $image->getImage() !!}"
                         style="background-image: url('{!! $image->getImage() !!}')">
                        <h2>{!! $loop->iteration !!}</h2>
                    </div>
                @endforeach
            </div>
        </div>
        <div class="footer-svg svg-div svg-top svg">
            {!! inline_svg('images/line-1deg.svg') !!}
        </div>
    </div>
@endsection
