<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
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

Route::name('export.')->prefix('export')->group(function () {
    Route::get('/projects', [ImportExportController::class, 'exportProjectList'])->name('project.list');
    Route::get('/projects/{project}', [ImportExportController::class, 'exportProject'])->name('project');
    Route::get('/projects/{project}/tasks', [ImportExportController::class, 'exportProjectTaskList'])->name('project.task.list');
    Route::get('/tasks', [ImportExportController::class, 'exportTaskList'])->name('task.list');
    Route::get('/tasks/{task}', [ImportExportController::class, 'exportTask'])->name('task');
});



Route::apiResource('projects', ProjectController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('tasks', TaskController::class);
Route::get('project/{id}/tasks', [TaskController::class, 'showAll']);
Route::apiResource('projectTasks', ProjectTasksController::class);
// Project Search
Route::get('search-projects/by-name/{key}', [ProjectController::class, 'searchByNameBeg']);
Route::get('search-projects/by-name-anywhere/{key}', [ProjectController::class, 'searchByNameAny']);
Route::get('search-projects/by-id/{key}', [ProjectController::class, 'searchById']);
// Task search
Route::get('search-tasks/by-name/{id}/{key}', [ProjectTasksController::class, 'searchByNameBeg']);
Route::get('search-tasks/by-name-anywhere/{id}/{key}', [ProjectTasksController::class, 'searchByNameAny']);
Route::get('search-tasks/by-id/{id}/{key}', [ProjectTasksController::class, 'searchById']);
// Route::get('search-tasks/{id}/{key}', [ProjectTasksController::class, 'search']);
//Dashboard data
Route::get('dashboard', [DashboardController::class, 'dashboardData']);
