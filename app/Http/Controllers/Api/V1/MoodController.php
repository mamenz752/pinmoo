<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Mood;
use Illuminate\Http\Request;

class MoodController extends Controller
{
    public function getAllMoods(Mood $mood)
    {
        $moods = $mood->all();
        return response()->json(['moods' => $moods]);
    }
}
