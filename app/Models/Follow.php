<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Follow extends Model
{
    protected $fillable = [
        "followee_id",
        "follower_id"
    ];
}
