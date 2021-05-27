<?php

namespace Database\Seeders;

use App\Models\Priority;
use Illuminate\Database\Seeder;

class PrioritySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $priority = new Priority();
        $priority->name = 'low';
        $priority->save();

        $priority = new Priority();
        $priority->name = 'medium';
        $priority->save();

        $priority = new Priority();
        $priority->name = 'high';
        $priority->save();
    }
}
