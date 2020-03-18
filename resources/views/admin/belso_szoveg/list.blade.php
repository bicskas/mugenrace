@extends('admin.layouts.admin')


@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between"><span>Page texts</span></div>
                    <div class="card-body">
                        <table class="table table-striped table-hover table-fixed  text-nowrap">
                            <thead class="thead-dark">
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Place</th>
                                <th class="text-right">Operations</th>
                            </tr>
                            </thead>
                            <tbody>
                            @forelse ($list as $element)
                                <tr id="item_{{$element->id}}">
                                    <td class="align-middle">{{$element->title}}</td>
                                    <td class="align-middle">{!! Str::limit(strip_tags($element->content),30) !!}</td>
                                    <td class="align-middle">{{$element->hely}}</td>
                                    <td class="align-middle text-right">
                                        @include('elements.buttons.adminEdit',['element' => $element])
                                        @include('elements.buttons.adminDelete',['element' => $element])

                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="4">No page text</td>
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
