<?php

use App\Http\Controllers\Backend\DashboardController;

/*
 * All route names are prefixed with 'admin.'.
 */
Route::redirect('/', '/admin/dashboard', 301);
Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::post('color-groups/get-for-datatable', 'ColorGroupController@getForDataTable')->name('color-groups.datatables');
Route::resource('color-groups', 'ColorGroupController');

Route::post('products/get-for-datatable', 'ProductController@getForDataTable')->name('products.datatables');
Route::resource('products', 'ProductController');

Route::resource('properties', 'PropertyController');
Route::resource('colors', 'ColorController');

Route::post('posts/get-for-datatable', 'PostController@getForDataTable')->name('posts.datatables');
Route::resource('posts', 'PostController');
