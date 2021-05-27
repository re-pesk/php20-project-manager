<?php

namespace Database\Seeders;

use App\Models\TaskState;
use Illuminate\Database\Seeder;

class TaskStateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $taskState = new TaskState();
        $taskState->name = 'to do';
        $taskState->save();

        $taskState = new TaskState();
        $taskState->name = 'in progress';
        $taskState->save();

        $taskState = new TaskState();
        $taskState->name = 'done';
        $taskState->save();
    }
}
