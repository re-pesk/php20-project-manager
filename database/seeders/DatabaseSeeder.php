<?php

namespace Database\Seeders;

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

        \App\Models\User::factory(10)->create();
        \App\Models\Project::factory(10)->create();
        \App\Models\Task::factory(100)->create();
    }
}
