@extends('admin.layouts.admin')

@section('content')
    <div class="card ">
        <div class="card-header clearfix">
            <h3 class="card-title pull-left">Page image - {{$model->title}}</h3>
            <div class="pull-right">
                @include('elements.buttons.adminBack')
            </div>
        </div>
        <div class="card-body">
            <h1 class="oldal-cim">{{$model->title}}</h1>

            <div class="szoveg">
                {!! $model->subtitle !!}
            </div>
        </div>
    </div>
@endsection
