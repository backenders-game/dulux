<?php

use Illuminate\Database\Seeder;
use App\Models\ProjectType;
class ProjectTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ProjectType::create([
            'name' => 'Hành lang'
        ]);
        ProjectType::create([
            'name' => 'Nhà bếp'
        ]);
        ProjectType::create([
            'name' => 'Nhà văn phòng'
        ]);
        ProjectType::create([
            'name' => 'Phòng khách'
        ]);
        ProjectType::create([
            'name' => 'Phòng ngủ'
        ]);
        ProjectType::create([
            'name' => 'Phòng trẻ em'
        ]);
        ProjectType::create([
            'name' => 'Phòng tắm'
        ]);
        ProjectType::create([
            'name' => 'Phòng ăn'
        ]);
    }
}
