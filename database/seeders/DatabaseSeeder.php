<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Task;
use Carbon\Factory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call([
            PrioritySeeder::class,
            ProjectStateSeeder::class,
            TaskStateSeeder::class,
        ]);

        Project::factory(env('PROJECTS_COUNT', 1000))->create()->each(function ($project) {
            $tasks = Task::factory(env('TASKS_COUNT', 200))->make();
            $project->tasks()->saveMany($tasks);
        });
    }
}
