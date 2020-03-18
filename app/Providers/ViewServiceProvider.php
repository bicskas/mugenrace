<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::directive('labels', function ($expression) {
            return labels($expression);
        });

        Blade::directive('inlinesvg', function ($path) {
            return "<?php echo inline_svg{$path};?>";
        });

        Blade::directive('icon', function ($class) {
            return "<?php echo '<span class=\"$class\"></span>' ;?>";
        });

        view()->composer('home', function ($view) {
            $view->with([
                'navbar_brand_src' => 'images/mugenrace-logo-black.png',
                'navbar_beast_src' => 'images/bethebeast-logo-black.png'
            ]);
        });

        view()->composer('home2', function ($view) {
            $view->with([
                'navbar_brand_src' => 'images/mugenrace-logo-black.png',
                'navbar_beast_src' => 'images/bethebeast-logo-black.png'
            ]);
        });

        view()->composer('*', function ($view) {

            if (Session::has('loaded')) {
                Session::put('loaded', 'loaded-complete');
            } else {
                Session::put('loaded', 'loaded-not-complete');
            }

            $src = array_merge([
                'navbar_brand_src' => 'images/mugenrace-logo-white.png',
                'navbar_beast_src' => 'images/bethebeast-logo-white.png',
                'loaded' => Session::get('loaded')
            ], $view->getData());

            $view->with($src);
        });


    }
}
