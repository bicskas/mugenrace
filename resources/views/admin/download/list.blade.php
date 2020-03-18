@extends('admin.layouts.admin')


@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between"><span>Downloads</span><span>@include('elements.buttons.adminNew')</span></div>
                    <div class="card-body">
                        <table class="table table-striped table-hover table-fixed  text-nowrap">
                            <thead class="thead-dark">
                            <tr>
                                <th>Title</th>
                                <th>Format</th>
                                <th>Category</th>
                                <th>Size</th>
                                <th>File</th>
                                <th class="text-right">Operations</th>
                            </tr>
                            </thead>
                            <tbody class="rendezheto" data-action="{{url('/'.app()->getLocale().'/admin/ajax/sorrend/download')}}">
                            @forelse ($list as $element)
                                <tr id="item_{{$element->id}}">
                                    <td class="align-middle">{{$element->title}}</td>
                                    <td class="align-middle">{{$element->format}}</td>
                                    <td class="align-middle">{{$element->category}}</td>
                                    @if(isset($element->fajlok[0]) and $element->fajlok[0]->hasFile())
                                        <td class="align-middle">{{$element->fajlok[0]->size}}</td>
                                        <td class="align-middle"><a href="{{$element->fajlok[0]->file()->getFile()}}" target="_blank">Download file</a></td>
                                    @else
                                        <td colspan="2" class="text-center">No file</td>
                                    @endif
                                    <td class="align-middle text-right">
                                        @include('elements.buttons.adminEdit',['element' => $element])
                                        @include('elements.buttons.adminDelete',['element' => $element])

                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="5">No download</td>
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
