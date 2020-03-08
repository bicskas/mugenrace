@extends('admin.layouts.admin')

@section('content')
    <div class="card ">
        <div class="card-header clearfix">
            <h3 class="card-title pull-left">Team- {{$model->name}}</h3>
            <div class="pull-right">
                @include('elements.buttons.adminBack')
            </div>
        </div>
        <div class="card-body">
            <h1 class="oldal-cim">{{$model->name}}</h1>

            <div class="szoveg">
                {!! $model->content !!}
            </div>
        </div>
    </div>
@endsection
