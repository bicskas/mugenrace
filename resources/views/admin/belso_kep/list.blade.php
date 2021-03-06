@extends('admin.layouts.admin')


@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between"><span>Page images</span><span>@include('elements.buttons.adminNew')</span></div>
                    <div class="card-body">
                        <table class="table table-striped table-hover table-fixed  text-nowrap">
                            <thead class="thead-dark">
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Link to</th>
                                <th class="text-right">Operations</th>
                            </tr>
                            </thead>
                            <tbody class="rendezheto" data-action="{{url('/'.app()->getLocale().'/admin/ajax/sorrend/belso_kep')}}">
                            @forelse ($list as $element)
                                <tr id="item_{{$element->id}}">
                                    <td class="align-middle">{!! Html::image($element->getImage(1.92,1000) . '?r=' . rand(0,1000),$element->title, ['class' => 'img-fluid','style' => 'height:70px']) !!}</td>
                                    <td class="align-middle">{{$element->title}}</td>
                                    <td class="align-middle">{{ucfirst($element->place)}}</td>
                                    <td class="align-middle text-right">
                                        @include('elements.buttons.adminEdit',['element' => $element])
                                        @include('elements.buttons.adminDelete',['element' => $element])

                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="4">No page image</td>
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
