<?php
namespace App\Repositories\Frontend;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Models\Property;

class PropertyRepository extends BaseRepository {
    /**
     * @return string
     */
    public function model()
    {
        return Property::class;
    }

}
