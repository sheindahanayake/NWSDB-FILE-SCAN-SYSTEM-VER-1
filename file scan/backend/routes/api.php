<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConsumerController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Add the new routes for authentication
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::middleware('auth:api')->get('/user', [AuthController::class, 'user']);

// Add the new routes for consumer data
Route::get('/consumers', [ConsumerController::class, 'index']);
Route::post('/consumers', [ConsumerController::class, 'store']);
Route::put('/consumers/{account_no}', [ConsumerController::class, 'update']);  // Use account_no instead of id
Route::delete('/consumers/{account_no}', [ConsumerController::class, 'destroy']);  // Use account_no instead of id
Route::get('/consumers/{account_no}/pdf', [ConsumerController::class, 'viewPdf']);  // Use account_no instead of id
Route::get('/consumers/search', [ConsumerController::class, 'search']);  // Consumer search endpoint
Route::get('/consumers/count', [ConsumerController::class, 'count']);  // Endpoint to get the total number of consumers
Route::get('/consumers/region-counts', [ConsumerController::class, 'regionCounts']);  // Endpoint to get the counts for each region
Route::get('/consumers/wss-counts', [ConsumerController::class, 'wssCounts']);  // Endpoint to get the counts for each WSS

// Test endpoint to check backend connection
Route::get('/test', function () {
    return response()->json(['message' => 'Backend is connected!']);
});

// Handle preflight requests for CORS
Route::options('{any}', function () {
    return response()->json([], 200);
})->where('any', '.*');