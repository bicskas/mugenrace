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
    <nav class="navbar navbar-expand-md navbar-light bg-primary shadow-sm">
        <a class="navbar-brand" href="{{ url('/') }}">
            {{ config('app.name', 'Mugenrace') }}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('about', app()->getLocale()) }}"><span>{{ __('About us') }}</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('sponsored', app()->getLocale()) }}"><span>{{ __('Sponsored') }}</span></a>
                </li>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
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
            </ul>
        </div>
        {!! inline_svg('images/top_internal-02.svg') !!}
    </nav>

    <main class="pb-4">
        @yield('content')
    </main>
</div>
</body>
</html>
