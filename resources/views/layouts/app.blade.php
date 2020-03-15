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
<div id="app">
    <nav class="navbar navbar-expand-lg navbar-dar shadow-sm">
        <a class="navbar-brand" href="{{ route('home', app()->getLocale()) }}">
            {!! Html::image($navbar_brand_src, config('app.name'), ['class' => 'img-fluid']) !!}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="overlay" id="navigationMenu">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link navigation-link" href="{{ route('about', app()->getLocale()) }}"><span>{{ __('About us') }}</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navigation-link" href="{{ route('sponsored', app()->getLocale()) }}"><span>{{ __('Sponsored') }}</span></a>
                </li>
            </ul>
        </div>

        <div class="collapse navbar-collapse" id="">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">
                <button id="navigation-btn" class="navigation-btn open" type="button" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
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
                @foreach(config('app.locales') as $code => $locale)
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link nav-lang @if($loop->last) no-after @endif  @if($code == app()->getLocale()) active @endif" href="{{ localeUrl($code)  }}">{{ strtoupper($code) }}</a>
                    </li>
                @endforeach
                <li class="nav-item">
                    {!! Html::image($navbar_beast_src,'BETHEBEAST',['class' => 'img-fluid']) !!}
                </li>
            </ul>
        </div>
        <div class="svg-div svg-bottom">
            {!! inline_svg('images/line-1deg.svg') !!}
        </div>
    </nav>

    <main class="pb-4">
        @yield('content')
    </main>
</div>
<footer class="footer bg-secondary">

    <div class="footer-top-content">
    </div>

    <div class="footer-middle-content">
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
