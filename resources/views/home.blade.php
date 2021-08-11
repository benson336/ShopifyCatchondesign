@extends('shopify-app::layouts.default')

@section('content')
    <!-- You are: (shop domain name) -->
    <p>You are: {{ Auth::user()->name }} </p>
    <input type="hidden" id="apiKey" value="{{ config('shopify-app.api_key') }}">
    <input type="hidden" id="shopOrigin" value="{{Auth::user()->name}}">
    <div id="app"></div>
@endsection

@section('scripts')
    @parent
    <script>
        actions.TitleBar.create(app, { title: 'Welcome' });
    </script>
@endsection
