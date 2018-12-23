<?php

use Illuminate\Database\Seeder;
use App\Models\ColorGroup;
class ColorGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ColorGroup::create([
            'name' => 'Họ màu trắng',
            'basic_color' => '#DBDBCC',
            'sort' => 0
        ]);
        ColorGroup::create([
            'name' => 'Họ màu đỏ',
            'basic_color' => '#E4032F',
            'sort' => 1
        ]);
        ColorGroup::create([
            'name' => 'Họ màu cam',
            'basic_color' => '#F28E16',
            'sort' => 2
        ]);
        ColorGroup::create([
            'name' => 'Họ màu vàng kim',
            'basic_color' => '#FFCD00',
            'sort' => 3
        ]);
        ColorGroup::create([
            'name' => 'Họ màu vàng',
            'basic_color' => '#FFEC00',
            'sort' => 4
        ]);
        ColorGroup::create([
            'name' => 'Họ màu vàng chanh',
            'basic_color' => '#B7CE0D',
            'sort' => 5
        ]);
        ColorGroup::create([
            'name' => 'Họ màu xanh lá',
            'basic_color' => '#3F993F',
            'sort' => 6
        ]);
        ColorGroup::create([
            'name' => 'Họ màu xanh mòng két',
            'basic_color' => '#2FAF9F',
            'sort' => 7
        ]);
        ColorGroup::create([
            'name' => 'Họ màu xanh dương',
            'basic_color' => '#4376A3',
            'sort' => 8
        ]);
        ColorGroup::create([
            'name' => 'Họ màu xanh tím',
            'basic_color' => '#745184',
            'sort' => 9
        ]);
        ColorGroup::create([
            'name' => 'Họ màu thiên nhiên',
            'basic_color' => '#8F9293',
            'sort' => 10
        ]);
        ColorGroup::create([
            'name' => 'Họ màu vàng đất',
            'basic_color' => '#C1B28B',
            'sort' => 11
        ]);
    }
}
