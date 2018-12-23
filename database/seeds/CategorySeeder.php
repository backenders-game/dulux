<?php

use Illuminate\Database\Seeder;
use App\Models\Category;
class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	Category::create([
            'name' => 'Sơn',
            'img_path' => 'uploads/img/categories/dulux-son.jpg',
        	'type' => 0
        ]);
        Category::create([
            'name' => 'Sản phẩm phụ trợ',
            'img_path' => 'uploads/img/categories/dulux_sp_phu_tro.png',
        	'type' => 0
        ]);
    }
}
