<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\DiaryController;
use App\Http\Controllers\FriendController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\Api\V1\MoodController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// TODO: Routing template...
// Route::middleware('auth')->group(function () {

// });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [PostController::class, 'index'])->name('dashboard');
    Route::get('/posts/new', [PostController::class, 'new'])->name('posts.new');
    Route::get('/posts/{id}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/posts/{id}', [PostController::class, 'update'])->name('posts.update');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
});

Route::middleware('auth')->group(function () {
    Route::post('/likes', [LikeController::class, 'index'])->name('likes');
});

Route::middleware('auth')->group(function() {
    Route::get('/diaries', [DiaryController::class, 'index'])->name('diary.index');
    Route::get('/diaries/new', [DiaryController::class, 'new'])->name('diary.new');
    Route::get('/diaries/{id}/edit', [DiaryController::class, 'edit'])->name('diary.edit');
    // Route::get('/diaries/{id}', [DiaryController::class, 'show'])->name('diary.show');
    Route::put('/diaries/{id}', [DiaryController::class, 'update'])->name('diary.update');
    Route::post('/diaries', [DiaryController::class, 'store'])->name('diary.store');
    Route::delete('/diaries/{id}', [DiaryController::class, 'destroy'])->name('diary.destroy');
});

Route::get('/analysis', function () {
    return Inertia::render('Analysis/AnalysisPresenter');
})->middleware('auth')->name('analysis');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function (){
    Route::get('/friends', [FriendController::class, 'index'])->name('friends.index');
    Route::post('/friends/follow', [FriendController::class, 'follow'])->name('friends.follow');
    
    Route::post('/friends/accept', [FriendController::class, 'accept'])->name('friends.accept');
    Route::post('/friends/unfollow', [FriendController::class, 'unfollow'])->name('friends.unfollow');
});

// Api routes

// Route::middleware('auth')->group(function () {
//     Route::get('api/v1/get-all-moods', [MoodController::class, 'getAllMoods']);
// });

require __DIR__.'/auth.php';
