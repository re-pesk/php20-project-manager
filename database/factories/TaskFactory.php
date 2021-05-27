<?php

namespace Database\Factories;

use App\Models\Priority;
use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->unique()->asciify('********************'),
            'description' => $this->faker->paragraph,
            'priority_id' => rand(1, Priority::count()),
            'task_state_id' => 1,
            // 'project_id' => rand(1, 1000),
        ];
    }
}
