<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Mood;
use App\Models\Post;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Mood $mood, Post $post)
    {
        return Inertia::render('Dashboard', [
            "moods" => $mood->get(),
            "newPost" => $post->orderby('created_at', 'desc')->first()
        ]);
    }

    public function new(User $user, Mood $mood)
    {
        return Inertia::render('Status/QuickStatusModal', [
            'user' => $user->find(auth()->id()),
            'moods' => $mood->get()
        ]);
    }

    public function store(Request $request, Post $post)
    {
        $request->validate([
            'mood_id' => 'required',
            'user_id' => 'required'
        ]);

        $input = $request->all();
        $post->fill($input)->save();
        return redirect(route('dashboard'));
    }
}
