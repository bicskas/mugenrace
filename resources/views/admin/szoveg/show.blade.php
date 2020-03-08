@extends('admin.layouts.admin')

@section('content')
    <div class="card ">
        <div class="card-header clearfix">
            <h3 class="card-title pull-left">Subpage - {{$model->cim}}</h3>
            <div class="pull-right">
                @include('elements.buttons.adminBack')
            </div>
        </div>
        <div class="card-body">
            <h1 class="oldal-cim">{{$model->cim}}</h1>

            <div class="szoveg">
                {!! $model->szoveg !!}
            </div>
        </div>
    </div>
@endsection
