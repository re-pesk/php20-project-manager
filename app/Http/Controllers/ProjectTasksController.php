<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;

class ProjectTasksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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

        $dataForTasks = array(
            'tasksData' => Task::leftJoin('priorities', 'tasks.priority_id', '=', 'priorities.id')
                ->leftJoin('task_states', 'tasks.task_state_id', '=', 'task_states.id')
                ->select('tasks.id', 'tasks.name', 'tasks.description', 'priorities.name as priority', 'task_states.name as state', 'tasks.created_at', 'tasks.updated_at')
                ->where('project_id', $id)
                ->paginate(8),
            'projectData' => Project::where('id', $id)->select('projects.id', 'projects.name')->get(),
        );
        return $dataForTasks;
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
        return Task::destroy($id);
    }
}
