@extends('layouts.app')

@section('content')
    <div id="page-header">
        {!! Html::image($page_image->getImage(2.065,3840), 'a',['class' => 'img-fluid']) !!}
    </div>

    <div class="team-sponsor-title">
        <h2>ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP</h2>
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

    <div class="sponsor-title">
        <h2>RIDERS SPONSORING</h2>
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
        <div id="rider-slider-nav" class="slider-nav">
            @foreach($riders as $rider)
                <div>
                    {!! Html::image($rider->getImage(1.53,630),$rider->name,['class' => 'img-fluid']) !!}
                </div>
            @endforeach
        </div>
    </div>
@endsection
