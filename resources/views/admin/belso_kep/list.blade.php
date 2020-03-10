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
                                <th>Title</th>
                                <th>Subtitle</th>
                                <th>Place</th>
                                <th>Image</th>
                                <th class="text-right">Operations</th>
                            </tr>
                            </thead>
                            <tbody class="rendezheto" data-action="{{url('/'.app()->getLocale().'/admin/ajax/sorrend/belso_kep')}}">
                            @forelse ($list as $element)
                                <tr id="item_{{$element->id}}">
                                    <td class="align-middle">{{$element->title}}</td>
                                    <td class="align-middle">{{$element->subtitle}}</td>
                                    <td class="align-middle">{{$element->place}}</td>
                                    <td class="align-middle text-wrap">{!! Html::image($element->getImage(2.77,600),$element->title, ['class' => 'img-fluid','style' => 'height:50px']) !!}</td>
                                    <td class="align-middle text-right">
                                        @include('elements.buttons.adminShow',['element' => $element])
                                        @include('elements.buttons.adminEdit',['element' => $element])
                                        @include('elements.buttons.adminDelete',['element' => $element])

                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="4">No about us paraghraph</td>
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
