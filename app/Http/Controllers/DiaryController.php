<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DiaryController extends Controller
{
    public function index()
    {
        return Inertia::render('Diary/DiaryPresenter');
    }
}
