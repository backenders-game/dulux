<?php

use Illuminate\Database\Seeder;
use App\Models\FinishSurface;
class FinishSurfaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FinishSurface::create([
        	'name' => 'Bề mặt Mờ'
        ]);
        FinishSurface::create([
        	'name' => 'Bề mặt Bống Mờ'
        ]);
        FinishSurface::create([
        	'name' => 'Bề mặt Bóng'
        ]);
    }
}
