<?php
namespace App\Repositories\Frontend;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Models\ProjectType;

class ProjectTypeRepository extends BaseRepository {
    /**
     * @return string
     */
    public function model()
    {
        return ProjectType::class;
    }

}
