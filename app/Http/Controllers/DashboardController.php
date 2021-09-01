<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class DashboardController extends Controller
{
    public function index(){
        return view('home');
    }

    public function graphql(){
        $shop = Auth::user();

        $request = $shop->api()->graph('{
            product(id: "gid://shopify/Product/6867519701185"){
                title
                description
                onlineStoreUrl
                }
            }
            ');
            //dd($request['body']);
        return json_decode($request['body']['data']['product']);
    }
}
