<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Events\RegisterEvent;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Validation\Rules\Password;

class UserController extends Controller
{

    public function login()
    {
        return view('auth.login');
    }

    public function register()
    {
        return view('auth.register');
    }

    public function userRegister(Request $req)
    {
        $req->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => [
                'required', 'confirmed', Password::min(8)
                    ->letters()
                    ->numbers()
                    ->mixedCase()
                    ->symbols()
                    ->uncompromised()
            ],
        ]);

        $name = $req->input('name');
        $email = $req->input('email');
        $password = Hash::make($req->input('password'));
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => $password
        ]);

        event(new RegisterEvent($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\LoginRequest  $request
     * @return \App\Http\Response
     */
    public function userLogin(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \App\Http\Response
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
