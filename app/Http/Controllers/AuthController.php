<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum'])->only(['logout', 'isLoggedIn']);
        $this->middleware(['cors']);
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

        $tokenName = env('APP_ID', 'myapp') . '-token';

        $token = $user->createToken($tokenName)->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where([
            'email' => $request->email,
        ])->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response(['message' => "Bad credencials"], 401);
        }

        $tokenName = env('APP_ID', 'myapp') . '-token';


        $token = $user->createToken($tokenName)->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token,
        ];

        return response($response, 201);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return response(['message' => 'Logged out']);
    }

    public function isLoggedIn(Request $request)
    {
        $user = $request->user();

        $token = $request->bearerToken();

        return response(['user' => $user, 'token' => $token, 'message' => 'The user is logged on!']);
    }
}
