@extends('layouts.app')

@section('content')
    <div id="page-header">
        {!! Html::image($page_image->getImage(2.065,3840), 'a',['class' => 'img-fluid']) !!}
    </div>
    <section id="team">
        <div class="team-sponsor-title">
            <h2>{!! __('Team sponsoring') !!}</h2>
        </div>

        <div id="team-slider-for" class="slider-for">
            @foreach($teams as $team)
                <div>
                    {!! Html::image($team->getImage(2.42,3840),$team->name,['class' => 'img-fluid','srcset' => $team->getImagebySrcSet(2.42,[3840,1920,1000])]) !!}
                </div>
            @endforeach
        </div>

        <div class="mb-5 pb-5 d-block">
            <div id="team-slider-nav" class="slider-nav">
                @foreach($teams as $team)
                    <div>
                        {!! Html::image($team->getImage(1.53,630),$team->name,['class' => 'img-fluid']) !!}
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <section id="rider">
        <div class="rider-sponsor-title">
            <h2>{!! __('Riders sponsoring') !!}</h2>
        </div>
        <div class="mt-5 pt-5 d-block">
            <div id="rider-slider-for" class="slider-for">
                @foreach($riders as $rider)
                    <div>
                        {!! Html::image($rider->getImage(2.42,3840),$rider->name,['class' => 'img-fluid']) !!}
                    </div>
                @endforeach
            </div>
        </div>
        <div class="mb-5 pb-5 d-block">

            <div id="rider-slider-nav" class="slider-nav" data-prevArrow='<button type="button" class="slick-prev">{!! inline_svg('images/arrow-triple.svg') !!}</button>'>
                @foreach($riders as $rider)
                    <div>
                        {!! Html::image($rider->getImage(1.53,630),$rider->name,['class' => 'img-fluid']) !!}
                    </div>
                @endforeach
            </div>
        </div>
    </section>
@endsection
