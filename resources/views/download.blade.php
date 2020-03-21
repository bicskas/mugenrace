@extends('layouts.app')
@section('page-title',ucfirst($page_title->title))

@section('content')
    <div id="page-header">
        {!! Html::image($page_image->getImage(2.065,3840), 'a',['class' => 'img-fluid wow slideInRight']) !!}
        <div class="page-image-content wow slideInLeft">
        </div>
    </div>


    <section class="download-section">
        <div class="download-title d-flex align-items-end">
            <h2>
                {!! $page_title->title !!}
                <span>{!! inline_svg('images/arrow-double-left.svg') !!} {!! $page_title->subtitle !!}</span>
            </h2>
            {!! inline_svg('images/arrow-top-down.svg') !!}
        </div>
        <div class="download-content">
            @foreach($download_categories as $category => $downloads)
                <div class="download-category">
                    <h2 class="download-category-title text-uppercase">
                        {!! inline_svg('images/arrow-top-left.svg').$category !!}
                    </h2>
                    @foreach($downloads as $download)
                        <div class="download-item d-flex align-items-stretch">
                            <span class="download-item-title flex-40">{!! $download->title !!}</span>
                            <span class="download-item-format flex-32 justify-content-end">{!! $download->format !!}</span>
                            <span class="flex-18 download-item-size justify-content-end">{!! human_filesize($download->fajlok[0]->size) !!}</span>
                            <span class="download-item-button flex-10 justify-content-end">
                            <a href="{!! $download->fajlok[0]->file()->getFile() !!}" target="_blank">{!! inline_svg('images/arrow-double-low.svg') !!}</a>
                            </span>
                        </div>
                    @endforeach
                </div>
            @endforeach
        </div>
    </section>
@endsection
