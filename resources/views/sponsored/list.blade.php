@extends('layouts.app')

@section('content')
    <h1 class="hover-test"><span>SZÖVEG</span></h1>
    <div class="slider-for">
        @foreach($teams as $team)
            <div>

                <h2>{!! $team->name !!}</h2>
                {!! $team->content !!}
                {!! Html::image($team->getImage(2.77,600),$team->name,['class' => 'img-fluid']) !!}
            </div>
        @endforeach
        @foreach($riders as $rider)
            <div>

                <h2>{!! $rider->name !!}</h2>
                <h4>{!! $rider->team !!}</h4>
                <h4>{!! $rider->race !!}</h4>
                {!! $rider->content !!}
                {!! Html::image($rider->getImage(2.77,600),$rider->name,['class' => 'img-fluid']) !!}
            </div>
        @endforeach
    </div>

    <div class="slider-nav">
        @foreach($teams as $team)
            <div>
                {!! Html::image($team->getImage(2.77,600),$team->name,['class' => 'img-fluid']) !!}
            </div>
        @endforeach
        @foreach($riders as $rider)
            <div>
                {!! Html::image($rider->getImage(2.77,600),$rider->name,['class' => 'img-fluid']) !!}
            </div>
        @endforeach
    </div>
@endsection
