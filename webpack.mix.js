const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/admin/admin.js', 'public/js/admin')
    // .copy('resources/js/webgl', 'public/js/webgl')
    // .js('resources/js/webgl/demo7.js', 'public/js/webgl-transition.js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/admin/admin.scss', 'public/css/admin')
    .version();

if (!mix.inProduction()) {
    mix.browserSync({
        proxy: process.env.APP_URL,
        port: process.env.APP_PORT
    });
    mix.webpackConfig({
        devtool: 'inline-source-map'
    });
}

