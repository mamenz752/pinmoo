<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Mood;
use App\Models\Diary;
use Inertia\Inertia;

class DiaryController extends Controller
{
    public function index(Diary $diary)
    {
        return Inertia::render('Diary/DiaryPresenter', [
            'diaries' => $diary->get()
        ]);
    }

    public function new(Post $post, Mood $mood)
    {
        return Inertia::render('Diary/DiaryNew', [
            'posts' => $post->get(),
            'moods' => $mood->get()
        ]);
    }

    public function store(Request $request, Diary $diary)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required'
        ]);

        $input = $request->all();
        $diary->fill($input)->save();
        return redirect(route('diary.index'));
    }

    public function edit(Request $request, Post $post, Diary $diary, Mood $mood)
    {
        return Inertia::render('Diary/DiaryEdit', [
            'posts' => $post->get(),
            'diary' => $diary->where('id', $request->id)->first(),
            'moods' => $mood->get()
        ]);
    }

    public function update(Request $request, Diary $diary)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required'
        ]);

        $input = $request->all();
        $diary->where('id', $request->id)->update($input);
        return redirect(route('diary.index'));
    }
}
