<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['cors']);
        $this->middleware(['auth:sanctum']);
        $this->middleware(['log.routes']);
    }

    public function dashboardData()
    {
        $projectCount = Project::get()->count();
        $finishedProjectCount = Project::where('project_state_id', '2')->count();
        $projectsCreatedLastWeekCount = Project::whereBetween('created_at', [Carbon::now()->subWeek(), Carbon::now()])->count();
        $finishedTaskCount = Task::where('task_state_id', '3')->count();
        $tasksCount = Task::count();
        $tasksCreatedLastWeekCount = Task::whereBetween('created_at', [Carbon::now()->subWeek(), Carbon::now()])->count();
        $userCount = User::get()->count();
        $usersCreatedLastMonth = User::whereBetween('created_at', [Carbon::now()->subMonth(), Carbon::now()])->count();
        $allData = array(
            'projectCount' => $projectCount." ".Str::plural('project', $projectCount),
            'finishedProjectCount' => $finishedProjectCount. " finished ".Str::plural('project', $finishedProjectCount),
            'projectsCreatedLastWeekCount' => $projectsCreatedLastWeekCount." ".Str::plural('project', $projectsCreatedLastWeekCount),
            'finishedTaskCount' => $finishedTaskCount." finished ".Str::plural('task', $finishedTaskCount),
            'tasksCreatedLastWeekCount' => $tasksCreatedLastWeekCount." ".Str::plural('task', $tasksCreatedLastWeekCount),
            'userCount' => $userCount." ".Str::plural('user', $userCount),
            'usersCreatedLastMonthCount' => $usersCreatedLastMonth." ".Str::plural('user', $usersCreatedLastMonth),
            'tasksCount' => $tasksCount." ".Str::plural('task', $tasksCount),
        );
        return $allData;
    }
}
