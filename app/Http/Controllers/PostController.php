<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mood;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        // $moods = Mood::all();
        return Inertia::render('Dashboard');
    }
}
