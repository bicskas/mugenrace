@extends('admin.layouts.admin')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header bg-secondary text-white">Admin összesítő</div>

                    <div class="card-body d-flex justify-content-between flex-wrap">
                        @foreach(['jatekok','tabortuzi_jatekok','irodalmak','nepdalok','modszertanok'] as $model)
                            <div class="card">
                                <div class="card-header bg-secondary text-white">{!! __($model) !!}</div>

                                <div class="card-body">
                                    <p>Aktív: {!! $$model->where('status','published')->count() !!}</p>
                                    <p>Ellenőrzés alatt: {!! $$model->where('status','supervision')->count() !!}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
