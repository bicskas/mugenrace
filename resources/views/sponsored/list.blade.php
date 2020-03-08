@extends('layouts.app')

@section('content')
    <div class="container">
        @foreach($teams as $team)
            <h2>{!! $team->name !!}</h2>
            {!! $team->content !!}
            {!! Html::image($team->getImage(2.77,600),$team->name,['class' => 'img-fluid']) !!}
        @endforeach
        <hr>
        @foreach($riders as $rider)
            <h2>{!! $rider->name !!}</h2>
            <h4>{!! $rider->team !!}</h4>
            <h4>{!! $rider->race !!}</h4>
            {!! $rider->content !!}
            {!! Html::image($rider->getImage(2.77,600),$rider->name,['class' => 'img-fluid']) !!}
        @endforeach
    </div>
@endsection
