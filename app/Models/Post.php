<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class Post extends Model
{
    protected $fillable = [
        'title',
        'image_small',
        'image_big',
        'category_id',
        'description',
        'content'
    ];
    public $timestamps = true;
}
