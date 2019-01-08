<?php
namespace App\Repositories\Frontend;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Models\Color;

class ColorRepository extends BaseRepository {
    /**
     * @return string
     */
    public function model()
    {
        return Color::class;
    }

}
