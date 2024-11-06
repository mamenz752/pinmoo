<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use Inertia\Inertia;

class LikeController extends Controller
{
    public function index(Request $request, User $user, Post $post)
    {
        $user = $user->find(auth()->id());
        $post = $post->find($request->post_id);
        $is_liked = $user->likePosts()->where('post_id', $post->id)->exists();
        if ($is_liked) {
            $user->likePosts()->detach($post->id);
        } else {
            $user->likePosts()->attach($post->id);
        }
        return Inertia::location(route('dashboard'));
    }
}
