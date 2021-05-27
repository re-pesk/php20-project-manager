<?php

namespace App\Exports;

use App\Models\Project;
use Maatwebsite\Excel\Concerns\FromQuery;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;

class ProjectsExport implements FromQuery, WithHeadings, WithMapping, WithColumnFormatting
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

    public function headings(): array
    {
        return [
            'ID',
            'Name',
            'Description',
            'State ID',
            'Created at',
            'Updated at',
        ];
    }

    public function map($project): array
    {
        return [
            $project->id,
            $project->name,
            $project->description,
            $project->project_state_id,
            Date::dateTimeToExcel($project->created_at),
            Date::dateTimeToExcel($project->updated_at),
        ];
    }

    public function columnFormats(): array
    {
        return [
            'E' => NumberFormat::FORMAT_DATE_YYYYMMDD . ' ' .NumberFormat::FORMAT_DATE_TIME4,
            'F' => NumberFormat::FORMAT_DATE_YYYYMMDD . ' ' .NumberFormat::FORMAT_DATE_TIME4,
        ];
    }
}
