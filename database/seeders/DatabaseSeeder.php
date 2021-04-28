<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;
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

        User::factory(10)->create();

        Project::factory(env('PROJECTS_COUNT', 1000))->create()->each(function ($project) {
            $tasks = Task::factory(env('TASKS_COUNT', 200))->make();
            $project->tasks()->saveMany($tasks);
        });
    }
}
