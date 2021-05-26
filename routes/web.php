<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
Route::get('/api/currentuser', [App\Http\Controllers\UserController::class, 'currentUser']);

Route::get('/organize{any}', [App\Http\Controllers\HomeController::class, 'index'])
->where('any', '.*')
->name('organize');
