<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Doctrine\Common\Inflector\Inflector;



class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['cors']);
        $this->middleware(['auth:sanctum']);
        $this->middleware(['log.routes']);
    }

    public function dashboardData(){
        $projectCount = Project::get()->count();
        $finishedProjectCount = Project::where('project_state_id', '2')->count();
        $projectsCreatedLastWeekCount = Project::whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $taskCount = Task::get()->count();
        $finishedTaskCount = Task::where('task_state_id', '3')->count();
        $tasksCreatedLastWeekCount = Task::whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count();
        $allData = array(
            'projectCount' => $projectCount." ".Str::plural('project', $projectCount),
            'finishedProjectCount' => $finishedProjectCount. " finished ".Str::plural('project', $finishedProjectCount),
            'projectsCreatedLastWeekCount' => $projectsCreatedLastWeekCount." ".Str::plural('project', $projectsCreatedLastWeekCount),
            'taskCount' => $taskCount." ".Str::plural('task', $taskCount),
            'finishedTaskCount' => $finishedTaskCount." finished ".Str::plural('task', $finishedTaskCount),
            'tasksCreatedLastWeekCount' => $tasksCreatedLastWeekCount." ".Str::plural('task', $tasksCreatedLastWeekCount),
        );
        return $allData;
    }
}
