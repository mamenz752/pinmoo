<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\Models\Mood;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(Mood $mood, Post $post)
    {
        return Inertia::render("Dashboard", [
                    "moods" => $mood->get(),
                    "post" => $post->orderBy('created_at', 'desc')->first()
                ]);
    }
    
    public function edit(Mood $mood, Post $post)
    {
        return Inertia::render("Post/Edit", [
                    "moods" => $mood->get(),
                    "post" => $post->orderBy('created_at', 'desc')->first()
                ]);
    }
    
    public function update(PostRequest $request, Post $post)
    {
        $input = $request->all();
        $post->fill($input)->save();
        return redirect("/posts/" . $post->id);
    }
    
    public function store(Request $request, Post $post)
    {
        $input = $request->all();
        $post->fill($input)->save();
        return redirect("/dashboard");
    }
}
