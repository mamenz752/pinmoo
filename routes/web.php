<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\DiaryController;
use App\Http\Controllers\ChartApiController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [PostController::class, "index"])->name('dashboard');
    
    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/diary', [DiaryController::class, 'index'])->name('diary');
    
    Route::get('/diary/create', [DiaryController::class, 'create'])->name('diary.create');
    Route::post('/diary/posts', [DiaryController::class, 'store']);
    
    Route::get('/diary/{diary}/edit', [DiaryController::class, 'edit'])->name('diary.edit');
    Route::put('/diary/{diary}/update', [DiaryController::class, 'update'])->name('diary.update');
    Route::delete('/diary/{diary}/delete', [DiaryController::class, 'destroy'])->name('diary.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/analysis', function () {
        return Inertia::render('Analysis');
    })->name('analysis');
});

// Route::middleware('auth')->group(function () {
//     Route::get('/api/chart-data', [ChartApiController::class, 'rader']);
// });


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
