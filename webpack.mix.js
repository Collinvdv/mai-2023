// webpack.mix.js
let mix = require("laravel-mix");
require('mix-tailwindcss');

mix.sass('resources/scss/app.scss', 'web/css').tailwind();