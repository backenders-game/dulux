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

mix.setPublicPath('public');

mix.sass('resources/sass/frontend/app.scss', 'css/frontend.css')
    .sass('resources/sass/backend/app.scss', 'css/backend.css')
    .js('resources/js/frontend/app.js', 'js/frontend.js')
    .js([
        'resources/js/backend/before.js',
        'resources/js/backend/app.js',
        'resources/js/backend/after.js'
    ], 'js/backend.js')
    .scripts([
        'node_modules/datatables.net/js/jquery.dataTables.js',
        'node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js',
        'node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.js',
        'node_modules/datatables.net-fixedheader-bs4/js/fixedHeader.bootstrap4.js'
        // 'node_modules/datatables.net-responsive/js/dataTables.responsive.js',
        // 'node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.js',
        // 'node_modules/datatables.net-scroller/js/dataTables.scroller.js',
        // 'node_modules/datatables.net-scroller-bs4/js/scroller.bootstrap4.js'
    ], 'public/js/datatable.js')
    .styles([
        'node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css',
        'node_modules/datatables.net-fixedheader-bs4/css/fixedHeader.bootstrap4.css'
        // 'node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.css',
        // 'node_modules/datatables.net-scroller-bs4/css/scroller.bootstrap4.css'
    ], 'public/css/datatable.css')
    .extract([
        'jquery',
        'bootstrap',
        'popper.js/dist/umd/popper',
        'axios',
        'sweetalert2',
        'lodash',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons'
    ]);

if (mix.inProduction() || process.env.npm_lifecycle_event !== 'hot') {
    mix.version();
}
