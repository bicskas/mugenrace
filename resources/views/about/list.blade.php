@extends('layouts.app')

@section('content')
    <div class="container">
        @foreach($abouts as $about)
            <p>{!! $about->title !!}</p>
            <p>{!! $about->subtitle !!}</p>
            {!! $about->content !!}
            {!! Html::image($about->getImage(2.77,600),$about->title,['class' => 'img-fluid']) !!}
        @endforeach
    </div>
@endsection
