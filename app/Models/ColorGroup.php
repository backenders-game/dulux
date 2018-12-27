<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ColorGroup extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'basic_color',
    ];
}
