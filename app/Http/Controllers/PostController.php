<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Mood;
use App\Models\Post;
use App\Models\Status;
use App\Models\PostStatus;
use Inertia\Inertia;
// use Cloudinary\Cloudinary;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary as Cloudinary;

class PostController extends Controller
{
    public function index(User $user, Mood $mood, Post $post)
    {
        $user = $user->find(auth()->id());

        $friends = User::whereHas('followees', function($query) use ($user) {
            $query->where('followee_id', $user->id);
        })
        ->whereHas('followers', function($query) use ($user) {
            $query->where('follower_id', $user->id);
        })
        ->get();

        $friend_posts = $friends->map(function ($friend) use ($post) {
            return $post->where('user_id', $friend->id)->orderby('created_at', 'desc')->first();
        });
        
        $liked_post_ids = $user->likePosts()->pluck('post_id')->toArray();
        $is_liked = $friend_posts->map(function ($post) use ($liked_post_ids) {
            if (is_null($post)) {
                return false;
            }
            return in_array($post->id, $liked_post_ids);
        })->toArray();
        // dd($is_liked);

        return Inertia::render('Dashboard', [
            "user" => $user,
            "moods" => $mood->get(),
            "newPost" => $post->where('user_id', $user->id)->orderby('created_at', 'desc')->first(),
            "friends" => $friends,
            "friendsPosts" => $friend_posts,
            "isLiked" => $is_liked
        ]);
    }

    public function new(User $user, Mood $mood)
    {
        // $moods = $mood->get();
        // $imagesUrl = $moods->map(function ($mood) {
            // dd($mood);
            // return Cloudinary::getUrl($mood->image_path);
        // });
        // dd($imagesUrl);
        return Inertia::render('Post/PostNew', [
            'user' => $user->find(auth()->id()),
            'moods' => $mood->get(),
            // 'imagesUrl' => $imagesUrl
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

    public function edit(Request $request, User $user, Mood $mood, Post $post, Status $status, PostStatus $post_status)
    {
        return Inertia::render('Post/PostEdit', [
            'user' => $user->find(auth()->id()),
            'moods' => $mood->get(),
            'post' => $post->find($request->id),
            "statuses" => $status->get(),
            "postStatus" => $post_status->where('post_id', $request->id)->get()
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'mood_id' => 'required',
            'user_id' => 'required'
        ]);
        
        $input = $request->all();
        $statusIds = $request->input('status_id', []);

        $post = $post->find($request->id);
        $post->update($input);

        $currentStatusIds = $post->statuses()->pluck('status_id')->toArray();
        $statusIdsToAttach = array_diff($statusIds, $currentStatusIds);
        $statusIdsToDetach = array_diff($currentStatusIds, $statusIds);

        foreach ($statusIdsToAttach as $statusId) {
            $post->statuses()->attach($statusId);
        }
        foreach ($statusIdsToDetach as $statusId) {
            $post->statuses()->detach($statusId);
        }

        return redirect(route('dashboard'));
    }
}
