@extends('layouts.index')

@section('register')

    <div class="min-h-screen flex justify-center items-center">

        <div class="max-w-sm w-full min-h-full rounded shadow-md shadow-slate-600 bg-slate-900 bg-opacity-50">

            <h1 class="text-center font-extrabold text-3xl uppercase text-blue-500 mt-4 mb-4"><a
                    href="/">S'enregistrer</a></h1>

            <!-- ici se trouve le message d'erreur -->
            @if ($errors->any())
                <div class="">
                    <div class="font-medium my-2 mx-4 text-red-700">
                        Whoops! Quelque chose va mal.
                    </div>

                    <ul class="my-1 mx-4 list-none list-inside text-sm text-red-700">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form class="flex-col w-full" method="POST" action="{{ route('register') }}">
                @csrf
                <div class="mt-2 mx-4">
                    <label class="labelStyle" for="name">Nom: </label>
                    <input class="input" type="text" name="name" id="name" required autofocus
                        autocomplete="off">
                </div>
                <div class="mt-2 mx-4">
                    <label class="labelStyle" for="email">Email: </label>
                    <input class="input" type="email" name="email" id="email" required autocomplete="off">
                </div>
                <!-- Mot de passe -->
                <div class="mt-2 mx-4">
                    <label class="labelStyle" for="password">Mot de passe: </label>
                    <input class="input" type="password" name="password" id="password" required
                        autocomplete="new-password">
                </div>
                <!-- Mot de passe de confirmation -->
                <div class="mt-2 mx-4">
                    <label class="labelStyle" for="password_confirmation">Mot de passe: </label>
                    <input class="input" type="password" name="password_confirmation" id="password_confirmation" required>
                </div>
                <div class="flex items-center justify-end my-4 mx-2">
                    <a class="text-sm text-blue-700" href="{{ route('login') }}">
                        déjà enregistré?
                    </a>
                </div>
                <div class="mb-4 ml-4">
                    <input class="btn2 cursor-pointer" type="submit" value="S'enregistrer">
                </div>
            </form>
        </div>
    </div>

@endsection
