<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Admin - {{ config('app.name', 'Mugenrace') }}</title>

    <!-- Scripts -->
    <script src="{{ mix('js/admin/admin.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ mix('css/admin/admin.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <nav class="navbar navbar-expand-md navbar-dark navbar-laravel">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
                {{ config('app.name', 'Mugenrace') }}
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle @if(in_array($active_page,['title','belso_kep','belso_szoveg','szoveg','seo']))active @endif" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Page
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item @if($active_page == 'title') active @endif" href="{{route('admin.title.index', app()->getLocale())}}">Page titles</a>
                            <a class="dropdown-item @if($active_page == 'belso_kep') active @endif" href="{{route('admin.belso_kep.index', app()->getLocale())}}">Page images</a>
{{--                            <div class="dropdown-divider"></div>--}}
{{--                            <a class="dropdown-item @if($active_page == 'belso_szoveg') active @endif" href="{{route('admin.belso_szoveg.index', app()->getLocale())}}">Page texts</a>--}}
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item @if($active_page == 'szoveg') active @endif" href="{{route('admin.szoveg.index', app()->getLocale())}}">Subpages</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item @if($active_page == 'seo') active @endif" href="{{route('admin.seo.index', app()->getLocale())}}">SEO</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle @if(in_array($active_page,['about','team','rider','download']))active @endif" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Content
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item @if($active_page == 'about') active @endif" href="{{route('admin.about.index', app()->getLocale())}}">About us</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item @if($active_page == 'team') active @endif" href="{{route('admin.team.index', app()->getLocale())}}">Teams</a>
                            <a class="dropdown-item @if($active_page == 'rider') active @endif" href="{{route('admin.rider.index', app()->getLocale())}}">Riders</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item @if($active_page == 'download') active @endif" href="{{route('admin.download.index', app()->getLocale())}}">Downloads</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item @if($active_page == 'subscribe') active @endif" href="{{route('admin.subscribe', app()->getLocale())}}">Subscribes</a>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <!-- Authentication Links -->
                <li class="nav-item"><a href="{{ url('/') }}" class="nav-link">@icon(fas fa-home)</a></li>
                @guest
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login', app()->getLocale()) }}">{{ __('Login') }}</a>
                    </li>
                    @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('register', app()->getLocale()) }}">{{ __('Register') }}</a>
                        </li>
                    @endif
                @else
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }} @icon(fas fa-user)<span class="caret"></span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ route('logout', app()->getLocale()) }}"
                               onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout', app()->getLocale()) }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </li>
                @endguest
            </ul>
        </div>
</div>
</nav>
@if (env('APP_ENV', 'production') == 'local' and Cookie::get('tesztoldal') != 'letezik')
    <div class="alert alert-danger alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" id="tesztbezar"><span aria-hidden="true">&times;</span></button>
        You are currently on the test page. Changes made here will not appear on the live page.
    </div>
@endif

@include('elements.sessions.errors')
@include('elements.sessions.warning')
@include('elements.sessions.message')

<main class="py-4 container">
    @yield('content')
</main>
</div>
</body>
</html>
