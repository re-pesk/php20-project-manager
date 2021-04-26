<?php

namespace Database\Seeders;

use App\Models\ProjectState;
use Illuminate\Database\Seeder;

class ProjectStateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $projectState = new ProjectState();
        $projectState->name = 'in progress';
        $projectState->save();

        $projectState = new ProjectState();
        $projectState->name = 'finished';
        $projectState->save();
    }
}
