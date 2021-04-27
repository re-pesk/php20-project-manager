<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectTasksController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
return $request->user();
});
 */
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
return $request->user();
});
 */

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/logged-in', [AuthController::class, 'isLoggedIn']);
Route::get('/project-data/{id}', [ProjectController::class, 'showData']);

Route::apiResource('projects', ProjectController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('tasks', TaskController::class);
Route::apiResource('projectTasks', ProjectTasksController::class);
