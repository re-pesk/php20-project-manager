<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{

    protected $toTruncate = ['task_states', 'project_states', 'priorities', 'tasks', 'projects'];

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        Schema::disableForeignKeyConstraints();

        foreach ($this->toTruncate as $table) {
            if (Schema::hasTable($table)) {
                DB::table($table)->truncate();
            }
        }

        $this->call([
            PrioritySeeder::class,
            ProjectStateSeeder::class,
            TaskStateSeeder::class,
        ]);

        if (User::all()->isEmpty()) {
            User::factory(10)->create();
        }

        Project::factory(env('PROJECTS_COUNT', 1000))->create()->each(function ($project) {
            $tasks = Task::factory(env('TASKS_COUNT', 200))->make();
            $project->tasks()->saveMany($tasks);
        });

        Schema::enableForeignKeyConstraints();
    }
}
