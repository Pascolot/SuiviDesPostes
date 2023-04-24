<!DOCTYPE html>
<html class="dark" lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>{{ config('app.name') }}</title>
</head>

<body class="antialiased">

    <div
        class="relative background flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
        @if (Route::has('login'))
            <div class="fixed top-0 right-0 px-6 py-4 sm:block">
                @auth
                    <a href="{{ url('/home') }}"
                        class="text-base cm:text-sm text-gray-700 dark:text-gray-300 font-semibold underline-offset-0">Accueil</a>
                @else
                    <a href="{{ route('login') }}"
                        class="text-base cm:text-sm text-gray-700 dark:text-gray-300 font-semibold underline-offset-0">Se
                        connecter</a>

                    @if (Route::has('register'))
                        <a href="{{ route('register') }}"
                            class="ml-4 text-base cm:text-sm text-gray-700 dark:text-gray-300 font-semibold underline-offset-0">S'enregistrer</a>
                    @endif
                @endauth
            </div>
        @endif
</body>

</html>
