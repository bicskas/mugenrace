@extends('layouts.app')

@section('body_class','homepage')
@section('content')
    <div id="home-page">
        <div class="home-page-header">
            {{--            <div class="home-page-slic">--}}
            {{--                @foreach($home_images as $image)--}}
            {{--                    <a href="{!! route($image->place, app()->getLocale()) !!}" id="bgdiv{!! $loop->iteration !!}"--}}
            {{--                       class="bg-image  @if($loop->first) wow animated active fadeInRight @else hidden @endif"--}}
            {{--                       class="bg-image  @if($loop->first)  active  image-1 @else hidden image-2  @endif"--}}
            {{--                       data-index="{!! $loop->iteration !!}"--}}
            {{--                       data-count="{!! $loop->count !!}"--}}
            {{--                       data-image="{!! $image->getImage() !!}"--}}
            {{--                       style="background-image: url('{!! $image->getImage() !!}')">--}}
            {{--                    </a>--}}
            {{--                @endforeach--}}
            {{--            </div>--}}
            <section class="cr-container">
                @foreach($home_images as $image)
                    <input id="select-img-{!! $loop->iteration !!}"
                           name="radio-set" type="radio"
                           class="bg-image-selector cr-selector-img-{!! $loop->iteration !!}"
                           @if($loop->first) checked @endif
                           data-href="{!! route($image->place, app()->getLocale()) !!}"
                           data-index="{!! $loop->iteration !!}"
                           data-count="{!! $loop->count !!}"/>
                @endforeach

                <div class="clr"></div>
                <div class="cr-bgimg">
                    @php($count = ($home_images->count()))
                    @for($i =0;$i < 4;$i++)
                        <div>
                            @for($j =0;$j < $count;$j++)
                                {{--                                @dd($home_images[$j]->getImage())--}}
                                <span style="background-image: url({!! $home_images[$j]->getImage(1.92,3840) !!})">Slice {!! $i !!} - Image {{$j}}</span>
                            @endfor
                        </div>
                    @endfor
                </div>

                <div class="cr-titles">
                    @foreach($home_images as $image)
                        <h3><span class="title">{!! $image->title !!}</span><span class="subtitle">{!! $image->subtitle !!}</span></h3>
                    @endforeach
                </div>
            </section>
            <div class="footer-svg svg-div svg-top svg">
                {!! inline_svg('images/line-1deg.svg') !!}
            </div>
        </div>
    </div>
@endsection
