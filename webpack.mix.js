/* eslint-disable import/no-extraneous-dependencies */
const mix = require('laravel-mix');
const ESLintPlugin = require('eslint-webpack-plugin'); // +++

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .webpackConfig({ plugins: [new ESLintPlugin()] })
    .sourceMaps(false, 'source-map')
    .copyDirectory('resources/_public', 'public')
    .js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [])
    .react()
    .browserSync({ proxy: '127.0.0.1:8000', ui: false });
