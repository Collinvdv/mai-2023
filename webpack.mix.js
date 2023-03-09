let mix = require('laravel-mix');
require('mix-tailwindcss');

mix.sass('resources/css/app.scss', 'web/css').tailwind();