@extends('layouts.index')

@section('login')

    <div class="min-h-screen flex justify-center items-center">
        <div class="max-w-sm w-full min-h-full rounded shadow-md shadow-slate-600 bg-slate-900 bg-opacity-50">

            <h1 class="text-center font-extrabold text-3xl uppercase text-blue-500 mt-4"><a href="/">Se connecter</a>
            </h1>

            <div class="flex justify-center my-4">
                <img class="hover:scale-50 cursor-pointer transition-transform duration-700" width="128" height="128"
                    src="{{ asset('images/logo.png') }}" alt="logo">
            </div>

            <!-- ici se trouve le message d'erreur -->
            @if ($errors->any())
                <div class="">
                    <div class="font-medium mx-4 text-red-700">
                        Whoops! Quelque chose va mal.
                    </div>

                    <ul class="my-1 mx-4 list-none list-inside text-sm text-red-700">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <form class="flex-col w-full " method="POST" action="{{ route('login') }}">
                @csrf
                <div class="mt-4 mx-4">
                    <label class="labelStyle" for="email">Email: </label>
                    <input class="input" type="email" name="email" id="email" required autofocus
                        autocomplete="off">
                </div>

                <div class="mt-4 mx-4">
                    <label class="labelStyle" for="password">Mot de passe: </label>
                    <input class="input" type="password" name="password" id="password" required
                        autocomplete="current-password">
                    <a id="ato" class="text-sm text-blue-700" href="{{ route('login') }}">
                        Mot de passe oublié?
                    </a>
                </div>

                <div class="mt-4 ml-4">
                    <label class="labelStyle" for="remember_me" class="inline-flex items-center">
                        <input id="remember_me" type="checkbox" class="rememberStyle" name="remember">
                        <span class="ml-2 text-sm text-slate-50">Se souvenir de moi</span>
                    </label>
                </div>
                <div class="flex items-center justify-end my-4 mx-2">
                    <a class="text-sm text-blue-700" href="{{ route('register') }}">
                        S'enregistrer
                    </a>
                </div>
                <div class="my-4 ml-4">
                    <input class="btn2 cursor-pointer" type="submit" value="Se connecter">
                </div>
            </form>
        </div>
    </div>

@endsection
