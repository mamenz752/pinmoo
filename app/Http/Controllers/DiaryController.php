<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
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

    public function new(Post $post)
    {
        return Inertia::render('Diary/New', [
            'posts' => $post->get()
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
}
