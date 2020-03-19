@extends('admin.layouts.admin')


@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between"><span>Subscribes</span></div>
                    <div class="card-body">
                        <table class="table table-striped table-hover table-fixed  text-nowrap">
                            <thead class="thead-dark">
                            <tr>
                                <th>E-mail</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody class="rendezheto" data-action="{{url('/'.app()->getLocale().'/admin/ajax/sorrend/about')}}">
                            @forelse ($list as $element)
                                <tr id="item_{{$element->id}}">
                                    <td class="align-middle">{{$element->email}}</td>
                                    <td class="align-middle">{{$element->created_at}}</td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="2">No subscribe</td>
                                </tr>
                            @endforelse
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer">
                        {!! $list->render() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection
