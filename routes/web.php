<?php

use App\Http\Controllers\InquiryController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
})->name('home');

Route::view('/products', 'pages.products')->name('products');
Route::view('/support', 'pages.support')->name('support');
Route::view('/about-us', 'pages.about')->name('about');
Route::view('/wholesale', 'pages.wholesale')->name('wholesale');
Route::view('/news', 'pages.news')->name('news');
Route::view('/verification', 'pages.verification')->name('verification');

Route::post('/support', [InquiryController::class, 'submitSupport'])->name('support.submit');
Route::post('/verification', [InquiryController::class, 'submitVerification'])->name('verification.submit');
Route::post('/wholesale', [InquiryController::class, 'submitWholesale'])->name('wholesale.submit');
