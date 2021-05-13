<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\ProjectsExport;
use App\Exports\TasksExport;
use Maatwebsite\Excel\Excel;

class ImportExportController extends Controller
{
    public function __construct()
    {
        // $this->middleware(['cors']);
        $this->middleware(['auth:sanctum'])->only(['export']);
        $this->middleware(['log.routes']);
    }

    public function exportProjectList()
    {
        $fileName = 'project-list.csv';

        return (new ProjectsExport)->download($fileName, Excel::CSV);
    }

    public function exportProject($project)
    {
        $fileName = 'project-' . $project . '.csv';
        return (new ProjectsExport)->whereId($project)->download($fileName, Excel::CSV);
    }

    public function exportProjectTaskList($project)
    {
        $fileName = 'project-' . $project . '-task-list.csv';
        return (new TasksExport)->whereProjectId($project)->download($fileName, Excel::CSV);
        // Excel::store(new DataExport, 'users-list.xlsx');
        // return response()->file(storage_path().'/exports/Filename2.xlsx');
    }

    public function exportTaskList()
    {
        $fileName = 'task-list.csv';

        return (new TasksExport)->download($fileName, Excel::CSV);
    }

    public function exportTask($task)
    {
        $fileName = 'task-'. $task .'.csv';

        return (new TasksExport)->whereId($task)->download($fileName, Excel::CSV);
    }
}
