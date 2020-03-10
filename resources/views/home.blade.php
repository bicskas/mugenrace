@extends('layouts.app')

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
    </div>
@endsection
