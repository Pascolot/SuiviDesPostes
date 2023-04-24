<?php

use App\Http\Controllers\Auth\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Guest Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "guest" middleware group. Now create something great!
|
*/


// Route pour les personnes non authentifié
Route::middleware('guest')->group(function () {
    Route::get('login', [UserController::class, 'login'])->name('login');
    Route::post('login', [UserController::class, 'userLogin'])->name('login');
    Route::get('register', [UserController::class, 'register'])->name('register');
    Route::post('register', [UserController::class, 'userRegister'])->name('register');
});

// Route pour les personnes authentifié
Route::middleware('auth')->group(function () {
    Route::post('logout', [UserController::class, 'destroy'])
        ->name('logout');
});
       