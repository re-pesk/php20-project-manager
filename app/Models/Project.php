<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'project_state_id'
    ];

    // Get project state
    public function state()
    {
        return $this->hasOne(ProjectState::class, 'id', 'project_state_id');
    }

    // Get project tasks
    public function tasks()
    {
        return $this->hasMany(Task::class, 'project_id', 'id');
    }
}
