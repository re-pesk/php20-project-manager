<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['cors']);
        // $this->middleware(['auth:sanctum']);
        $this->middleware(['log.routes']);
    }

    public function dashboardData(){
        $allData = array(
            'projectCount' => Project::get()->count(),
            'finishedProjectCount' => Project::where('project_state_id', '2')->count(),
            'projectsCreatedLastWeekCount' => Project::whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count(),
            'taskCount' => Task::get()->count(),
            'finishedTaskCount' => Task::where('task_state_id', '3')->count(),
            'tasksCreatedLastWeekCount' => Task::whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->count(),
        );
        return $allData;
    }
}
