<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
    
    public function create()
    {
        return Inertia::render("Diary/Create");
    }
    
    public function store(DiaryRequest $request, Diary $diary)
    {
        $input = $request->all();
        
        $diary->fill($input)->save();
        return redirect("/diary");
    }
}
