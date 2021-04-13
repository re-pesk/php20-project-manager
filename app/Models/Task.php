<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'priority_id',
        'task_state_id',
        'project_id'
    ];

    // Get task priority
    public function priority()
    {
        return $this->hasOne(Priority::class, 'id', 'priority_id');
    }

    // Get task state
    public function state()
    {
        return $this->hasOne(TaskState::class, 'id', 'task_state_id');
    }
}
