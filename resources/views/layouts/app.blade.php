<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Mugenrace') }}</title>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link rel="shortcut icon" type="image/png" href="/images/mugenrace-logo-yellow.png">
</head>
<body class="d-flex flex-column h-100 @yield('body_class')">
@if(env('APP_ENV', 'production') != 'local')
    <div id="loading">

        <div class="loading-nav">
            <div id="loadingNavIcon">
                {!! inline_svg('images/arrow-triple.svg') !!}
                {!! __('Scroll or click to navigate') !!}
                {!! Html::image('images/bethebeast-logo-yellow.png','BETHEBEAST',['class' => 'img-fluid float-right mr-3 d-none d-sm-block']) !!}
            </div>
        </div>

        <div id="loading-box" class="d-block">
            <span id="loading-percent">0%</span>
            {!! Html::image('images/loading/01.png','Loading',['id' => 'loading-image', 'class' => 'mx-auto d-block img-fluid','data-percent' => '1']) !!}
        </div>
    </div>

@endif
<div id="app">
    <nav class="navbar navbar-expand-xl navbar-dar shadow-sm">
        <a class="navbar-brand" href="{{ route('home', app()->getLocale()) }}">
            {!! Html::image($navbar_brand_src, config('app.name'), ['class' => 'img-fluid']) !!}
        </a>
        {{--        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">--}}
        {{--            <span class="navbar-toggler-icon"></span>--}}
        {{--        </button>--}}

        <div class="overlay close-nav" id="navigationMenu">
            <!-- Left Side Of Navbar -->
            <div class="navigation-list mt-5 d-flex flex-column justify-content-around align-content-stretch">
                <a class="nav-link navigation-link" href="{{ route('about', app()->getLocale()) }}"><span>{{ __('We are') }}</span></a>
                <a class="nav-link navigation-link" href="{{ route('sponsor', app()->getLocale()) }}"><span>{{ __('Everywhere') }}</span></a>
            </div>
        </div>

        <div class="collapse navbar-collapse" id="">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">
                <button id="navigation-btn" class="navigation-btn open" type="button" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span id="openIcon">
                        {!! inline_svg('images/arrow-triple.svg') !!}
                    </span>
                    <span id="closeIcon">
                        {!! inline_svg('images/arrow-close.svg') !!}
                    </span>
                </button>
                <div id="navPageTitle" class="my-auto">@yield('page-title')</div>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown d-md-none">
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        {{ strtoupper(app()->getLocale()) }} <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        @foreach(config('app.locales') as $code => $locale)
                            @if($code != app()->getLocale())
                                <a class="dropdown-item wow fast bounceInRight" href="{!! localeUrl($code) !!}" data-wow-delay="0">
                                    {{ strtoupper($code) }}
                                </a>
                            @endif
                        @endforeach
                    </div>
                </li>
                @foreach(getLocales() as $code => $locale)
                    <li class="nav-item d-none d-md-block d-flex align-items-center">
                        <a class="nav-link nav-lang d-flex align-items-center @if($loop->last) no-after @endif  @if($code == app()->getLocale()) active @endif" href="{{ localeUrl($code)  }}">
                            {{ strtoupper($code) }}
                        </a>
                    </li>
                @endforeach
                <li class="nav-item d-flex align-items-center">
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
</div>
<footer class="footer bg-secondary">

    <div class="footer-top-content">
        <h2>Fejlesztés alatt</h2>
    </div>

    <div class="footer-middle-content">
        <h2>Fejlesztés alatt</h2>
    </div>
    <div class="footer-bottom-content">
        <div class="footer-bottom-content-svg svg-div svg-top svg">
            {!! inline_svg('images/line-1deg.svg') !!}
        </div>
        <div class=" d-flex justify-content-between align-items-end">
            <p class="m-0 flex-10">© {!! date('Y') !!} Mugenrace</p>

            <ul class="footer-bottom-list list-group list-group-horizontal flex-10 text-center">
                <li class="list-group-item"><a href="#">Privacy</a></li>
                <li class="list-group-item"><a href="#">Cookie</a></li>
            </ul>

            <p class="m-0 flex-10 text-right"><a href="#">Credits</a></p>
        </div>
    </div>
</footer>
</body>
</html>
