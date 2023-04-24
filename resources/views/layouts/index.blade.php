<!DOCTYPE html>
<html class="dark" lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>{{ config('app.name') }}</title>
</head>

<body class="dark:bg-gray-900">

    {{-- ici que nous integrons le page login et register --}}
    @yield('login')
    @yield('register')

    {{-- Cette video est pour le fond --}}
    <video class="fixed right-0 bottom-0 object-cover min-h-screen w-screen -z-50" autoplay muted loop preload
        src={{ asset('videos/JouveDevientLuminess.mp4') }}></video>

    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>
