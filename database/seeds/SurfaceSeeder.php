<?php

use Illuminate\Database\Seeder;
use App\Models\Surface;
class SurfaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Surface::create([
            'name' => 'Trần nhà'
        ]);
        Surface::create([
            'name' => 'Tường'
        ]);
    }
}
