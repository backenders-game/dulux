<?php
namespace App\Repositories\Backend;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;
use App\Models\Product;

class ProductRepository extends BaseRepository {
    /**
     * @return string
     */
    public function model()
    {
        return Product::class;
    }

}
