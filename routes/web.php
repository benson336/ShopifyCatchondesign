<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', 'DashboardController@index')->middleware(['verify.shopify'])
->name('home');*/

/*Route::get('/app/{path}',[
    'uses' => 'DashboardController@index',
    'as' => 'home',
    'where' => ['path' => '.*']
])->middleware(['verify.shopify']);*/

/*Route::get('/{path}', 'DashboardController@index')->middleware(['verify.shopify'])
->where('path', '.*');*/

Route::get('/app', 'DashboardController@index')->middleware(['verify.shopify']);
Route::get('/app/links/all', 'DashboardController@index')->middleware(['verify.shopify']);
Route::get('/app/links/new', 'DashboardController@index')->middleware(['verify.shopify']);

Route::get('/app/graphql', 'DashboardController@graphql');

Route::get('/projects', 'ProjectController@index')->middleware(['verify.shopify']);
Route::get('/projects/create', 'ProjectController@index')->middleware(['verify.shopify']);