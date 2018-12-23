<?php

use App\Http\Controllers\Backend\DashboardController;

/*
 * All route names are prefixed with 'admin.'.
 */
Route::redirect('/', '/admin/dashboard', 301);
Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::post('color-groups/get-for-datatable', 'ColorGroupController@getForDataTable')->name('color-groups.datatables');
Route::resource('color-groups', 'ColorGroupController');
