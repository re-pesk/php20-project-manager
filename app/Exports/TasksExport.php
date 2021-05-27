<?php

namespace App\Exports;

use App\Models\Task;
use Maatwebsite\Excel\Concerns\FromQuery;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;

class TasksExport implements FromQuery, WithHeadings, WithMapping, WithColumnFormatting
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

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Description',
            'Priority ID',
            'State ID',
            'Project ID',
            'Created at',
            'Updated at',
        ];
    }

    public function map($task): array
    {
        return [
            $task->id,
            $task->name,
            $task->description,
            $task->priority_id,
            $task->task_state_id,
            $task->project_id,
            Date::dateTimeToExcel($task->created_at),
            Date::dateTimeToExcel($task->updated_at),
        ];
    }

    public function columnFormats(): array
    {
        return [
            'G' => NumberFormat::FORMAT_DATE_YYYYMMDD . ' ' .NumberFormat::FORMAT_DATE_TIME4,
            'H' => NumberFormat::FORMAT_DATE_YYYYMMDD . ' ' .NumberFormat::FORMAT_DATE_TIME4,
        ];
    }
}
