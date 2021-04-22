<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{

    public function __construct()
    {
        // $this->middleware(['auth:sanctum']);
        $this->middleware(['cors']);
        $this->middleware(['log.routes']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $project_task_count = Project::leftJoin('tasks', 'projects.id', '=', 'tasks.project_id')
                    ->select('projects.id as id', 'tasks.id as task_id', '')
                    // ->select('*')
                    ->get();
                    // print_r($project_task_count);
                    
        return 
        // Project::all();
        $project_task_count;
        // $projectData = array(
        //     'project_state' => Project::leftJoin('project_states', 'projects.project_state_id', '=', 'project_states.id')
        //     ->leftJoin('tasks', 'projects.id', '=', 'tasks.project_id')
        //     ->select('projects.id','project_states.name as state_name','projects.name', 'projects.description') 
        //         ->get(),
                
        //         'project_task_count' => Project::leftJoin('tasks', 'projects.id', '=', 'tasks.project_id')
        //             ->select('tasks.name as task_name')
        //             ->count(),

        //         'project_unfinished_tasks_count' => Project::leftJoin('tasks', 'projects.id', '=', 'tasks.project_id')
        //             ->select('tasks.name as task_name')
        //             ->where('task_state_id', '!=', 3)
        //             ->count(),
        // );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return
            $projectData = array(
                'project_state' => Project::leftJoin('project_states', 'projects.project_state_id', '=', 'project_states.id')
                    ->select('project_states.name')
                    ->where('projects.id', $id)
                    ->get(),
                'project_task_count' => Project::leftJoin('tasks', 'projects.id', '=', 'tasks.project_id')
                    ->select('tasks.name as task_name')
                    ->where('projects.id', $id)
                    ->count(),
                'project_unfinished_tasks_count' => Project::leftJoin('tasks', 'projects.id', '=', 'tasks.project_id')
                    ->select('tasks.name as task_name')
                    ->where('projects.id', $id)
                    ->where('task_state_id', '!=', 3)
                    ->count(),
            );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
