<?php

namespace App\Http\Middleware;

use Closure;

class CheckBanned
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if (auth()->check() && auth()->user()->status == 'banned') {
            auth()->logout();

            $message = 'Fiókját felfüggesztették. Kérjük, lépjen kapcsolatba a rendszergazdával.';

            return redirect()->route('login')->withErrors($message);
        }

        return $next($request);
    }
}
