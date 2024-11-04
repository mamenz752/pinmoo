<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostStatus extends Model
{
    protected $table = 'post_status';
    protected $fillable = [
        "post_id",
        "status_id"
    ];
}
