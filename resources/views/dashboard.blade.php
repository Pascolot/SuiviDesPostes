<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>{{ config('app.name') }}</title>
</head>

<body class="dark:bg-slate-700 antialiased min-h-full m-0 p-0">

    {{-- Ici nous avons juste trois utilisateur  --}}
    @if (Auth::user()->name === 'ResponsableTT')
        <div id="app">
        @elseif (Auth::user()->name === 'Technicien')
            <div id="app2">
            @else
                <div id="app3"></div>
    @endif


    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>
