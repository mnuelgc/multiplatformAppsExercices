<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CatalogController;

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

Route::get('/', [HomeController::class, 'index']);
/*
Route::get('login', function () {
    return view('auth.login');
});

Route::get('logout', function () {
    return "Logout usuario";
});
*/
Route::group(['middleware' => 'auth'], function() {
    Route::get('catalog', [CatalogController::class, 'getIndex']);
    Route::get('catalog/show/{id}', [CatalogController::class, 'getShow']);
    Route::get('catalog/create', [CatalogController::class, 'getCreate']);
    Route::get('catalog/edit/{id}', [CatalogController::class, 'getEdit']);
    Route::post('catalog/create', [CatalogController::class, 'postCreate']);
    Route::put('catalog/edit/{id}', [CatalogController::class, 'putEdit']);
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');