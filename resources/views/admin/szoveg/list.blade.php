@extends('admin.layouts.admin')


@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between"><span>Statikus oldalak</span><span>@include('elements.buttons.adminNew')</span></div>
                    <div class="card-body">
                        <table class="table table-striped table-hover table-fixed  text-nowrap">
                            <thead class="thead-dark">
                            <tr>
                                <th>Cím</th>
                                <th>Link</th>
                                <th>Szöveg</th>
                                <th class="text-right">Műveletek</th>
                            </tr>
                            </thead>
                            <tbody>
                            @forelse ($list as $element)
                                <tr id="item_{{$element->id}}">
                                    <td class="align-middle">{{$element->cim}}</td>
                                    <td class="align-middle">{{$element->link}}</td>
                                    <td class="align-middle text-wrap">{{str_limit(strip_tags($element->szoveg))}}</td>
                                    <td class="align-middle text-right">
                                        @include('elements.buttons.adminShow',['element' => $element])
                                        @include('elements.buttons.adminEdit',['element' => $element])
                                        @include('elements.buttons.adminDelete',['element' => $element])

                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="4">Nincs statikus oldal</td>
                                </tr>
                            @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection
