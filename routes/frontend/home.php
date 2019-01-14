<?php

use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ContactController;
use App\Http\Controllers\Frontend\FindColorController;
use App\Http\Controllers\Frontend\IdeaController;
use App\Http\Controllers\Frontend\ProductController;
use App\Http\Controllers\Frontend\HelpProfessionals;
use App\Http\Controllers\Frontend\FindStoreController;
use App\Http\Controllers\Frontend\ListProductController;
use App\Http\Controllers\Frontend\DetailProductController;


use App\Http\Controllers\Frontend\User\AccountController;
use App\Http\Controllers\Frontend\User\ProfileController;
use App\Http\Controllers\Frontend\User\DashboardController;

/*
 * Frontend Controllers
 * All route names are prefixed with 'frontend.'.
 */

Route::get('contact', [ContactController::class, 'index'])->name('contact');
Route::post('contact/send', [ContactController::class, 'send'])->name('contact.send');

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/mau-sac-bang-mau', [FindColorController::class, 'index'])->name('mau_sac_bang_mau');
Route::post('/find-color', [FindColorController::class, 'findColor'])->name('find_color');
Route::get('/y-tuong', [IdeaController::class, 'index'])->name('y_tuong');
Route::get('/meo-va-loi-khuyen-trang-tri-nha', [HelpProfessionals::class, 'index'])->name('loi_khuyen');
Route::get('/storefinder', [FindStoreController::class, 'index'])->name('storefinder');
Route::get('/san-pham', [ProductController::class, 'index'])->name('san_pham');
Route::get('/danh-sach-san-pham', [ListProductController::class, 'index'])->name('danh_sach_san_pham');
Route::get('/chi-tiet-san-pham', [DetailProductController::class, 'index'])->name('chi_tiet_san_pham');
/*
 * These frontend controllers require the user to be logged in
 * All route names are prefixed with 'frontend.'
 * These routes can not be hit if the password is expired
 */
Route::group(['middleware' => ['auth', 'password_expires']], function () {
    Route::group(['namespace' => 'User', 'as' => 'user.'], function () {
        /*
         * User Dashboard Specific
         */
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

        /*
         * User Account Specific
         */
        Route::get('account', [AccountController::class, 'index'])->name('account');

        /*
         * User Profile Specific
         */
        Route::patch('profile/update', [ProfileController::class, 'update'])->name('profile.update');
    });
});
