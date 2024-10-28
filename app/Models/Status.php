<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    public function posts(): BelongsToMany
    {
        return $this->belongsToMany(Post::class, 'post_status', 'status_id', 'post_id');
    }
}
