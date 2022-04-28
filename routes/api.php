<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('programs', [UserController::class, 'getPrograms']);
Route::get('consultancy', [UserController::class, 'getConsultancy']);
Route::get('tbi', [UserController::class, 'getTechnology']);
Route::get('nc', [UserController::class, 'getNegosyo']);
Route::get('ssf', [UserController::class, 'getShared']);
Route::get('rdf', [UserController::class, 'getResearch']);
Route::get('hei', [UserController::class, 'getHigher']);
Route::get('msme', [UserController::class, 'getMicro']);
Route::get('priority', [UserController::class, 'getSector']);
Route::get('economic', [UserController::class, 'getEconomic']);
Route::post('login', [UserController::class, 'userlogin']);
Route::post('programs', [UserController::class, 'addPrograms']);


// Schema::connection('users')->create('users', function (Blueprint $table) {
//     $table->id();
// });


// Schema::create('users', function (Blueprint $table) {
//     $table->engine = 'InnoDB';

// });


// Schema::create('users', function (Blueprint $table) {
//     $table->charset = 'utf8mb4';
//     $table->collation = 'utf8mb4_general_ci';

// });