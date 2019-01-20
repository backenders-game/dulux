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

    public function properties () {
        return $this->belongsToMany('App\Models\Property', 'product_properties', 'product_id', 'property_id');
    }

    public function colors () {
        return $this->belongsToMany('App\Models\Color', 'product_colors', 'product_id', 'color_id');
    }

    public function finishSurface () {
        return $this->belongsTo('App\Models\FinishSurface');
    }
}
