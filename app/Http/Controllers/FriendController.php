<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Follow;
use Inertia\Inertia;

class FriendController extends Controller
{
    public function index(Request $request,Follow $follow, User $user)
    {
        $user = Auth::user();
        $username = $request->query('username');
        $findUsers = $user->where('username', 'like', "$username")->get();

        $requestUsers = User::whereHas('followees', function($query) use ($user) {
                $query->where('followee_id', $user->id);
            })
            ->whereDoesntHave('followers', function($query) use ($user) {
                $query->where('follower_id', $user->id);
            })
            ->get();

        return Inertia::render('Friend/FriendPresenter', [
            // "requestUsers" => User::where('follower_id')
            "findUsers" => $findUsers,
            "requestUsers" => $requestUsers
            // "message" => $request->query('message')
        ]);
    }
    
    public function follow(Request $request, User $user, Follow $follow)
    {
        $user = Auth::user();
        $followee_id = $request->input('followee_id');
        $user->followees()->attach($followee_id);
        return redirect()->route('friends.index');
    }

    public function accept(Request $request, User $user)
    {
        $user = Auth::user();
        $follower_id = $request->input('follower_id');
        $user->followees()->attach($follower_id);
        return redirect()->route('friends.index');
    }

    public function unfollow(Request $request, User $user, Follow $follow)
    {
        $user = Auth::user();
        $unfollow_id = $request->input('unfollow_id');
        $user->followers()->detach($unfollow_id);
        return redirect()->route('friends.index');
    }
}
