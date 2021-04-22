<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogRoutes
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if (app()->environment('local')) {
            $log = [
                'uri' => $request->getUri(),
                'method' => $request->getMethod(),
                'user' => $request->user(),
                'token' => $request->bearerToken(),
                'request_body' => $request->all(),
                'response' => $response->getContent(),
            ];

            Log::debug('Route logging', $log);

        }


        return $response;
    }
}
