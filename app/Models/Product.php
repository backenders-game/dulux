<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'img_path',
        'finish_surface_id',
        'coverage',
        'num_layer',
        'drying_time',
        'category_id',
        'user_manual',
        'description',
        'construction_guide',
        'protection_info',
        'introduction',
    ];
}
