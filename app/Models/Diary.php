<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Diary extends Model
{
    protected $fillable = [
        "title",
        "body",
        "is_star",
        "user_id",
        "post_id"
    ];

    public function post()
    {
        return $this->belongsTo(Post::class)->withDefault();
    }

    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();
    }
}
