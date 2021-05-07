<?php

namespace App\Rules;

use App\Models\Task;
use Illuminate\Contracts\Validation\Rule;

class UniqueToProject implements Rule
{

    public $projectId;
    public $taskId;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($projectId, $taskId = null)
    {
        $this->projectId = $projectId;
        //used only for record update
        $this->taskId = $taskId;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if(Task::where('project_id', $this->projectId)->where('name', $value)->where('id', '!=', $this->taskId)->exists()) {
            return false;
        }
        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'This task :attribute already exists for this project';
    }
}
