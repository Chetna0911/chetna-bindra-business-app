<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BusinessController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/business/create', [BusinessController::class, 'create'])->name('business.create');
    Route::post('/business', [BusinessController::class, 'store'])->name('business.store');
    Route::get('/business/list', [BusinessController::class, 'index'])->name('business.index');
});

Route::get('/', function () {
    return Inertia::render('Welcome');
});

