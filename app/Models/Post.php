<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    protected $fillable = [
        "user_id",
        "mood_id",
        "comment"
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(Post::class)->withDefault();
    }

    public function mood(): BelongsTo
    {
        return $this->belongsTo(Mood::class);
    }

    public function diaries(): HasMany
    {
        return $this->hasMany(Diary::class);
    }

    public function statuses(): BelongsToMany
    {
        return $this->belongsToMany(Status::class, 'post_status', 'post_id', 'status_id');
    }

    public function likeUser(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'likes', 'post_id', 'user_id')->withTimestamps();
    }
}
