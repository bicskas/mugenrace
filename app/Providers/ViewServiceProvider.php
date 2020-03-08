<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
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
    }
}
