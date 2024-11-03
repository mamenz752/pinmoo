<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Mood;
use App\Models\Post;
use App\Models\Status;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(User $user, Mood $mood, Post $post)
    {
        return Inertia::render('Dashboard', [
            "user" => $user->find(auth()->id()),
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

    public function edit(Request $request, User $user, Mood $mood, Post $post, Status $status)
    {
        return Inertia::render('Status/Edit', [
            'user' => $user->find(auth()->id()),
            'moods' => $mood->get(),
            'post' => $post->find($request->id),
            "statuses" => $status->get()
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'mood_id' => 'required',
            'user_id' => 'required'
        ]);

        $post = $post->find($request->id);
        $input = $request->all();
        $post->statuses()->attach($request->status_id);
        $post->update($input);
        return redirect(route('dashboard'));
    }
}
