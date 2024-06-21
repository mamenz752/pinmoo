<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Http\Request\DiaryRequest;
use App\Models\Post;
use App\Models\Diary;
use Inertia\Inertia;
use Inertia\Response;

class DiaryController extends Controller
{
    public function index(Diary $diary)
    {
        return Inertia::render("Diary", [
                    "diaries" => $diary->get() 
        ]);
    }
    
    public function create(Post $post)
    {
        return Inertia::render("Diary/Create", [
                    "posts" => $post->get()
        ]);
    }
    
    public function store(Request $request, Diary $diary)
    {
        $input = $request->all();
        
        $diary->fill($input)->save();
        return redirect("/diary");
    }
}
