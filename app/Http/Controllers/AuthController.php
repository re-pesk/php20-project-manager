<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware(['cors']);
        $this->middleware(['auth:sanctum'])->only(['logout', 'isLoggedIn']);
        $this->middleware(['log.routes']);
    }

    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
        ]);

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $response = [
            'user' => $user,
            'message' => 'The user is registered!'
        ];

        return response($response);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Bad credencials'], 401);
        }

        $user = auth()->user();

        $response = [
            'user' => $user,
            'message' => 'The user is logged in!'
        ];

        return response($response, 201);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response(['message' => 'The user is logged out']);
    }

    public function isLoggedIn(Request $request)
    {
        $user = $request->user();

        $response = [
            'user' => $user,
            'message' => 'The user is logged in!',
            'reloaded_at' => date('c'),
        ];

        return response($response);
    }
}
