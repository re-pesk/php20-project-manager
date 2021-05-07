<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
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
        // KAROLIS
        $validation = $request->validate([
            'name' => 'required|max:255|unique:tasks',
            'description' => 'required',
            'priority_id' => 'required|integer|min:1|max:3',
            'project_id' => 'required|integer',
        ]);

        Task::create($request->all());

        return $validation;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //KAROLIS
        return $task;
    }

    public function showAll($projectId) {
        $projectTasks = array(
            'tasksData' => Task::leftJoin('priorities', 'tasks.priority_id', '=', 'priorities.id')
                ->leftJoin('task_states', 'tasks.task_state_id', '=', 'task_states.id')
                ->select('tasks.id', 'tasks.name', 'tasks.description', 'priorities.name as priority', 'task_states.name as state', 'tasks.created_at', 'tasks.updated_at')
                ->where('project_id', $projectId)->get(),
            'projectData' => Project::where('id', $projectId)->select('projects.id', 'projects.name')->get(),
        );
        return $projectTasks;
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
    public function update(Request $request, Task $task)
    {
        //KAROLIS
        $request->validate([
            'name' => 'required|max:255|unique:tasks',
            'description' => 'required',
            'priority_id' => 'required|integer|min:1|max:3',
            'task_state_id' => 'required|integer|min:1|max:3',
        ]);

        $task->update($request->all());
        return $task;
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
