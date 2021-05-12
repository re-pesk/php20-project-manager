<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ImportExportController;
use App\Http\Controllers\ProjectTasksController;

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

Route::post('/logged-in', [AuthController::class, 'isLoggedIn']);
Route::post('/log', [LogController::class, 'addToLog']);

Route::get('/projects/export', [ImportExportController::class, 'exportProjectList'])->name('project.list.export');
Route::get('/projects/{project}/export', [ImportExportController::class, 'exportProject'])->name('project.export');
Route::get('/projects/{project}/tasks/export', [ImportExportController::class, 'exportProjectTaskList'])->name('project.task.list.export');
Route::get('/tasks/export', [ImportExportController::class, 'exportTaskList'])->name('task.list.export');
Route::get('/tasks/{task}/export', [ImportExportController::class, 'exportTask'])->name('task.export');


Route::apiResource('projects', ProjectController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('tasks', TaskController::class);
Route::get('project/{id}/tasks', [TaskController::class, 'showAll']);
Route::apiResource('projectTasks', ProjectTasksController::class);
