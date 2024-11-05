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
        return Inertia::render('Friend/FriendPresenter', [
            "requestUsers" => User::whereHas('followers', function($query) use ($user) {
                $query->where('follower_id', $user->id);
            })
            ->whereDoesntHave('followees', function($query) use ($user) {
                $query->where('followee_id', $user->id);
            })
            ->get(),
            "findUsers" => $findUsers,
        ]);
    }
    
    // public function search(Request $request, User $user)
    // {
    //     $user = Auth::user();
    //     // dd($findUser);
    //     return Inertia::location(route('friends.index', ["findUser" => $findUser]));
    // }
    
    public function request(Request $request, User $user)
    {
        $user = Auth::user();
        // dd($request->query('id'));
        // $findUser = User::find($request->query()->input('id'));
        // $requestId = $request->input('id');
        // if (!$user->followees()->where('follower_id', $user->id)->exists()) {
        //     $user->followees()->attach($findUser->id);
        // }
        // $user->find($requestId)->followees()->attach(auth()->id());
        return redirect()->route('friends.index');
    }

    public function accept(Request $request, User $user)
    {
        // $acceptId = $request->input('id');
        // $user->find($acceptId)->followers()->attach(auth()->id());
        return redirect()->route('friends.index');
    }
}
