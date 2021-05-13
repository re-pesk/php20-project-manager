<?php

namespace App\Exports;

use App\Models\Task;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;

class TasksExport implements FromQuery
{
    use Exportable;

    protected int $id = 0;
    protected int $projectId = 0;

    public function whereId(int $id = 0)
    {
        $this->id = $id;

        return $this;
    }

    public function whereProjectId(int $id = 0)
    {
        $this->projectId = $id;

        return $this;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function query()
    {
        $query = Task::query();

        if ($this->projectId) {
            $query = $query->where('project_id', $this->projectId);
        }

        if ($this->id) {
            $query = $query->where('id', $this->id);
        }

        return $query;
    }
}
