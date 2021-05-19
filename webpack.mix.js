/* eslint-disable import/no-extraneous-dependencies */
const mix = require('laravel-mix');
const ESLintPlugin = require('eslint-webpack-plugin'); // +++
require('dotenv').config();
const webpack = require('webpack');

const dotEnvPlugin = new webpack.DefinePlugin({
    'process.env': {
        APP_DEBUG: JSON.stringify(process.env.APP_DEBUG || false),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        FRONT_LOGS: JSON.stringify(process.env.FRONT_LOGS || false),
    },
});

const PORT = process.env.SERVER_PORT;

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
    .webpackConfig({ plugins: [new ESLintPlugin(), dotEnvPlugin] })
    .sourceMaps(false, 'source-map')
    .copyDirectory('resources/_public', 'public')
    .copyDirectory('resources/img', 'public/img')
    .js('resources/js/main.js', 'public/js')
    .postCss('resources/css/main.css', 'public/css', [])
    .react()
    .browserSync({ proxy: `127.0.0.1:${PORT}`, ui: false });
