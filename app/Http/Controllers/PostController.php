<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\Models\Mood;
use App\Models\Post;
use App\Models\Status;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(Mood $mood, Post $post)
    {
        return Inertia::render("Dashboard", [
                    "moods" => $mood->get(),
                    "quickpost" => $post->orderBy('created_at', 'desc')->first()
                ]);
    }
    
    public function edit(Mood $mood, Post $post, Status $status)
    {
        return Inertia::render("Post/Edit", [
                    "moods" => $mood->get(),
                    "post" => $post->orderBy('created_at', 'desc')->first(),
                    "statuses" => $status->get()
                ]);
    }
    
    public function update(PostRequest $request, Post $post)
    {
        $input = $request->all();
        $post->fill($input)->save();
        $post->statuses()->attach($request->status_id);
        return redirect("/dashboard");
    }
    
    public function store(Request $request, Post $post)
    {
        $input = $request->all();
        $post->fill($input)->save();
        return redirect("/dashboard");
    }
}
