<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});


Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('users.index');
});