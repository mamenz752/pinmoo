<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mood;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Mood $mood)
    {
        return Inertia::render("Dashboard", ["moods" => $mood->get()]);
    }
}
