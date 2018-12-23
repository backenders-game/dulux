<?php

use Illuminate\Database\Seeder;
use App\Models\Property;
class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Property::create([
            'name' => 'Chống thấm'
        ]);
        Property::create([
            'name' => 'Độ bám dính cao'
        ]);
        Property::create([
            'name' => 'Chống nấm mốc'
        ]);
        Property::create([
            'name' => 'Không thêm chì và thủy ngân'
        ]);
        Property::create([
            'name' => 'Chống loang màu'
        ]);
        Property::create([
            'name' => 'Che lấp khe nứt nhỏ'
        ]);
        Property::create([
            'name' => 'Lượng VOC thấp'
        ]);
        Property::create([
            'name' => 'Chống bong tróc'
        ]);
        Property::create([
            'name' => 'Chống bám bụi'
        ]);
        Property::create([
            'name' => 'Làm mát'
        ]);
        Property::create([
            'name' => 'Mặt sơn nhẵn mịn'
        ]);
        Property::create([
            'name' => 'Bền màu'
        ]);
        Property::create([
            'name' => 'Giữ màu sắc bền lâu cho lớp sơn phủ'
        ]);
        Property::create([
            'name' => 'Bảo vệ cả trong lẫn ngoài'
        ]);

    }
}
