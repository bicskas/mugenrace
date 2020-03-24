<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100 @yield('body_class')">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="{{isset($seo_desc) ? $seo_desc : ''}}@yield('desc')">
    <meta name="keywords" content="{{isset($seo_key) ? $seo_key : ''}}@yield('keywords')">
    <meta property="og:description" name="og:description"
          content="{{isset($og_desc) ? $og_desc : ''}}@yield('og_desc')">
    <meta property="og:title" name="og:title" content="{{isset($og_title) ? $og_title : ''}}@yield('og_title')">
    <meta property="og:image" name="og:image" content="{{isset($og_image) ? $og_image : ''}}@yield('og_image')">
    <meta property="og:url" name="og:url" content="{{url()->current()}}">
    <title>{{ (isset($title) ? $title.' - ' : null) . config('app.name', 'Mugenrace') }}</title>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link rel="shortcut icon" type="image/png" href="/images/mugenrace-logo-yellow.png">
</head>
<body class="hideScrollbar @yield('body_class') {!! $loaded !!}">
<div id="loading" class="{!! $loaded !!}">

    <div class="loading-nav">
        <div id="loadingNavIcon">
            {!! inline_svg('images/arrow-triple.svg') !!}
            {!! __('Scroll or click to navigate') !!}
            {!! Html::image('images/bethebeast-logo-yellow.png','BETHEBEAST',['class' => 'img-fluid float-right mr-3 d-none d-sm-block','id' => 'bethebeastload']) !!}
        </div>
    </div>

    <div id="loading-box" class="@if($loaded == 'loaded-complete') d-none @else d-block @endif">
        {{--        <span id="loading-percent">0%</span>--}}
        {!! Html::image('images/loading/01.png','Loading',['id' => 'loading-image', 'class' => 'mx-auto d-block img-fluid','data-percent' => '1']) !!}
    </div>
</div>
<div id="app">
    <nav class="navbar navbar-expand-sm navbar-dar shadow-sm">
        <a class="navbar-brand" href="{{ route('home', app()->getLocale()) }}">
            {!! Html::image($navbar_brand_src, config('app.name'), ['class' => 'img-fluid']) !!}
        </a>
        <button id="navigation-btn-mobile" class="navigation-btn open d-block d-md-none" type="button" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span id="openIcon">
                        {!! inline_svg('images/arrow-triple.svg') !!}
                    </span>
            <span id="closeIcon">
                        {!! inline_svg('images/arrow-close.svg') !!}
                    </span>
        </button>

        <div class="overlay close-nav" id="navigationMenu">
            <!-- Left Side Of Navbar -->
            <div class="navigation-list mt-md-5 d-flex flex-column justify-content-around align-content-stretch">

                @foreach($nav_links as $nav_link)

                    <a class="nav-link navigation-link" href="{{ route($nav_link->place, app()->getLocale()) }}">
                        <span class="nav-hover-overlay">{{ $nav_link->title }}</span><span class="small">{!! $nav_link->subtitle !!}</span>
                    </a>
                @endforeach
                {{--                <a class="nav-link navigation-link" href="{{ route('sponsor', app()->getLocale()) }}"><span class="nav-hover-overlay">{{ __('Everywhere') }}</span><span class="small">where you can to see</span></a>--}}
                {{--                <a class="nav-link navigation-link" href="http://www.mugenraceshop.com"><span class="nav-hover-overlay">{{ __('Produtcs') }}</span><span class="small">what do you need to know</span></a>--}}
            </div>

            <div class="navigation-lang">
                @foreach(getLocales() as $code => $locale)
                    <div class="nav-item d-none d-md-block d-flex justify-content-center align-items-center">
                        <a class="nav-link nav-lang  @if($loop->last) no-after @endif  @if($code == app()->getLocale()) active disabled @endif" href="{{ localeUrl($code)  }}">
                            <span>{{ strtoupper($code) }}</span>
                        </a>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="collapse navbar-collapse" id="">
            <!-- Left Side Of Navbar -->
            <div class="navigation-left d-flex align-items-center">
                <button id="navigation-btn" class="navigation-btn open d-none d-md-block" type="button" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span id="openIcon">
                        {!! inline_svg('images/arrow-triple.svg') !!}
                    </span>
                    <span id="closeIcon">
                        {!! inline_svg('images/arrow-close.svg') !!}
                    </span>
                </button>
                <div id="navPageTitle" class="my-auto">@yield('page-title')</div>
            </div>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                {{--                <li class="nav-item dropdown d-md-none">--}}
                {{--                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>--}}
                {{--                        {{ strtoupper(app()->getLocale()) }} <span class="caret"></span>--}}
                {{--                    </a>--}}

                {{--                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">--}}
                {{--                        @foreach(config('app.locales') as $code => $locale)--}}
                {{--                            @if($code != app()->getLocale())--}}
                {{--                                <a class="dropdown-item wow fast bounceInRight" href="{!! localeUrl($code) !!}" data-wow-delay="0">--}}
                {{--                                    {{ strtoupper($code) }}--}}
                {{--                                </a>--}}
                {{--                            @endif--}}
                {{--                        @endforeach--}}
                {{--                    </div>--}}
                {{--                </li>--}}
                {{--                @foreach(getLocales() as $code => $locale)--}}
                {{--                    <li class="nav-item d-none d-md-block d-flex align-items-center">--}}
                {{--                        <a class="nav-link nav-lang d-flex align-items-center @if($loop->last) no-after @endif  @if($code == app()->getLocale()) active disabled @endif" href="{{ localeUrl($code)  }}">--}}
                {{--                            {{ strtoupper($code) }}--}}
                {{--                        </a>--}}
                {{--                    </li>--}}
                {{--                @endforeach--}}
                <li class="nav-item d-flex align-items-center d-xs-none d-sm-none d-md-none d-lg-block">
                    {!! Html::image($navbar_beast_src,'BETHEBEAST',['class' => 'img-fluid ml-auto','id' => 'bethebeastLogo']) !!}
                </li>
            </ul>
        </div>
        <div class="svg-div svg-bottom">
            {!! inline_svg('images/line-1deg.svg') !!}
        </div>
    </nav>

    <main class="">
        @yield('content')
    </main>
    <footer class="footer bg-black">

        <div class="footer-top-content d-flex justify-content-start align-items-stretch">
            <div id="footer-mugenrace-logo-div" class="flex-13 " style="position: relative">
                {!! Html::image('images/mugenrace-logo-down-white.png','Mugenrace',['class' => 'img-fluid max-height align-self-end','id'=>'footer-white-logo']) !!}
            </div>

            <div class="flex-17 d-flex align-items-end footer-arrow arrow-one text-center">
                <h2>{!! __('Info') !!}</h2>
                {!! inline_svg('images/arrow-bottom-up.svg') !!}
            </div>

            <div class="flex-17 d-flex align-items-end footer-arrow arrow-two">
                <h2>{!! __('Follow us') !!}</h2>
                {!! inline_svg('images/arrow-double-thick.svg') !!}
            </div>

            <div class="flex-17 d-flex align-items-end footer-arrow arrow-three">
                <h2>{!! __('Join to us') !!}</h2>
                {!! inline_svg('images/arrow-triple.svg') !!}
            </div>
        </div>

        <div class="footer-middle-content d-flex justify-content-start align-items-stretch">
            <div class="empty flex-13"></div>
            <div class="flex-17 xs-double-one">
                <div class="list-group footer-group footer-group-download">
                    <div class="list-group-item"><a href="{!! route('download') !!}">{!! __('Downloads') !!}</a></div>
                    <div class="list-group-item"><a href="#">{!! __('Press') !!}</a></div>
                    <div class="list-group-item"><a href="mailto:{!! Html::email('info@mugenrace.com') !!}">{!! __('Contacts') !!}</a></div>
                </div>
            </div>
            <div class=" flex-17 xs-double-two">
                <div class="list-group footer-group footer-group-follow">
                    <div class="list-group-item"><a href="#">Facebook</a></div>
                    <div class="list-group-item"><a href="#">Instagram</a></div>
                    <div class="list-group-item"><a href="#">Youtube</a></div>
                    <div class="list-group-item"><a href="#">LinkedIn</a></div>
                </div>
            </div>
            <div class="list-group footer-group footer-form ">
                <div class="list-group-item">
                    {!! Form::open(['id' => 'subscribeFrom','class' => 'd-flex justify-content-sm-center justify-content-md-between align-items-center', 'route' => ['subscribe',app()->getLocale()]]) !!}
                    <label class="d-block d-md-none">Join to us</label>
                    <div class="d-flex">
                        {!! Form::email('email','',['id' =>'emailInput', 'required','class' => 'form-control','placeholder' => __('Your e-mail address')]) !!}
                        <button type="submit" value="submit">{!! inline_svg('images/arrow-triple.svg') !!}</button>
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
        <div class="footer-bottom-content">
            <div class="footer-bottom-content-svg svg-div svg-top svg">
                {!! inline_svg('images/line-1deg.svg') !!}
            </div>
            <div class=" d-flex justify-content-between align-items-end">
                <p class="m-0">© {!! date('Y') !!} MUGENRACE</p>

                <ul class="footer-bottom-list list-group list-group-horizontal text-center">
                    <li class="list-group-item"><a href="#">{!! _('Privacy') !!}</a></li>
                    <li class="list-group-item"><a href="#">Cookie</a></li>
                    <li class="list-group-item"><a href="#">{!! _('Credits') !!}</a></li>
                </ul>

            </div>
        </div>
    </footer>
</div>
</body>
</html>
