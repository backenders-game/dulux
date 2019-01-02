<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Color extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'name',
        'color',
        'color_group_id',
        'is_deep_color',
        'mixed_by_computer'
    ];

    public function surfaces()
    {
        return $this->belongsToMany('App\Models\Surface', 'color_surfaces', 'color_id', 'surface_id');
    }

    public function projecttypes () {
        return $this->belongsToMany('App\Models\ProjectType', 'color_projecttypes', 'color_id', 'project_type_id');
    }
}
