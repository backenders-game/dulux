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
        	'type' => 0
        ]);
        Category::create([
        	'name' => 'Các sản phẩm phụ trợ',
        	'type' => 0
        ]);
    }
}
