<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogController extends Controller
{

    public function __construct()
    {
        $this->middleware(['cors']);
        $this->middleware(['auth:sanctum']);
        $this->middleware(['log.routes']);
    }


    public function addToLog(Request $request)
    {
        Log::channel('front')->info('User interaction with form', ['user_actions' => $request->all()]);
    }
}
