<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Mood;
use App\Models\User;
use App\Models\Diary;
use Inertia\Inertia;

class DiaryController extends Controller
{
    public function index(Diary $diary, User $user, Mood $mood, Post $post)
    {
        $user = $user->find(auth()->id());
        return Inertia::render('Diary/DiaryPresenter', [
            'diaries' => $diary->where('user_id', $user->id)->get(),
            'moods' => $mood->get(),
            'posts' => $post->where('user_id', $user->id)->get()
        ]);
    }

    public function new(Post $post, Mood $mood, User $user)
    {
        $user = $user->find(auth()->id());
        return Inertia::render('Diary/DiaryNew', [
            'posts' => $post->where('user_id', $user->id)->get(),
            'moods' => $mood->get()
        ]);
    }
    
    public function store(Request $request, Diary $diary, User $user)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required'
        ]);
        
        $user = $user->find(auth()->id());
        $input = $request->all();
        $input['user_id'] = $user->id;
        $diary->fill($input)->save();
        return redirect(route('diary.index'));
    }

    public function edit(Request $request, Post $post, Diary $diary, Mood $mood, User $user)
    {
        $user = $user->find(auth()->id());
        return Inertia::render('Diary/DiaryEdit', [
            'posts' => $post->where('user_id', $user->id)->get(),
            'diary' => $diary->where('id', $request->id)->first(),
            'moods' => $mood->get()
        ]);
    }

    public function update(Request $request, Diary $diary, User $user)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required'
        ]);

        $user = $user->find(auth()->id());
        $input = $request->all();
        $input['user_id'] = $user->id;
        $diary->where('id', $request->id)->update($input);
        return redirect(route('diary.index'));
    }

    public function destroy(Request $request, Diary $diary)
    {
        $diary->where('id', $request->id)->delete();
        return redirect(route('diary.index'));
    }
}
