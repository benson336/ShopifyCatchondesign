<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ \Osiset\ShopifyApp\Util::getShopifyConfig('app_name') }}</title>
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        @yield('styles')
    </head>

    <body>
    Testt
    
        <div class="app-wrapper">
            <div class="app-content">
                <main role="main">
                
                    <p>You are: {{ Auth::user()->name }}</p>
                    <div id="app"></div>
                    
                </main>
            </div>
        </div>

    
        <input type="hidden" id="apiKey" value="{{ config('shopify-app.api_key') }}">
    <input type="hidden" id="shopOrigin" value="{{Auth::user()->name}}">
        <script src="{{asset('js/app.js')}}"></script>
        {{--@yield('scripts')--}}
    </body>
</html>