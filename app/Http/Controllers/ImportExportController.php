<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\DataExport;

class ImportExportController extends Controller
{
    public function __construct()
    {
        // $this->middleware(['cors']);
        $this->middleware(['auth:sanctum'])->only(['export']);
        $this->middleware(['log.routes']);
    }

    public function export()
    {
        return Excel::download(new DataExport, 'users-list.xlsx');
        // Excel::store(new DataExport, 'users-list.xlsx');
        // return response()->file(storage_path().'/exports/Filename2.xlsx');
    }
}
