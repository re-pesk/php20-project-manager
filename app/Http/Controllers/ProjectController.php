<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{

    public function __construct()
    {
        $this->middleware(['cors']);
        $this->middleware(['auth:sanctum']);
        $this->middleware(['log.routes']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Project::withCount(['tasks', 'unfinishedTasks'])->with('state:name,id')->get();
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
        $validation = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'project_state_id' => 'required|integer|min:1|max:2',
        ]);

        Project::create($request->all());

        return $validation;
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

    public function showData($id){
        return Project::find($id);
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
        $project = Project::find($id);
        $project->update($request->all());
        return $project;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       return Project::destroy($id);
    }
}
