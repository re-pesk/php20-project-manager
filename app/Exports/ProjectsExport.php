<?php

namespace App\Exports;

use App\Models\Project;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;

class ProjectsExport implements FromQuery
{
    use Exportable;

    protected int $id = 0;

    public function whereId(int $id = 0)
    {
        $this->id = $id;

        return $this;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function query()
    {
        $query = Project::query();

        if ($this->id) {
            $query = $query->where('id', $this->id);
        }

        return $query;
    }
}
