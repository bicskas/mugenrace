@extends('layouts.app')

@section('content')
    <div class="container">

        <h1 class="text-center">{{$title}}</h1>
        <div class="szoveg">
            {!! $model->szoveg !!}
        </div>
    </div>
@endsection
