// webpack.mix.js
let mix = require("laravel-mix");
require('mix-tailwindcss');

mix.browserSync('localhost:8888');

mix.sass('resources/scss/app.scss', 'web/css').tailwind();