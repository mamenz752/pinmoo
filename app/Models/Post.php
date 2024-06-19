<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    
    protected $fillable = [
        "user_id",
        "mood_id",
        "comment"
    ];
    
    public function statuses()
    {
        return $this->belongsToMany(Status::class);
    }
}
