<?php

use Illuminate\Database\Seeder;
use App\Models\Color;
use App\Models\ColorGroup;
class ColorLandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $colors = [];

        $colorGrp = ColorGroup::where('name', 'Họ màu vàng đất')->first();
        if ($colorGrp) {
            foreach($colors as $cl) {
                $color = Color::create([
                    'name' => $cl['name'],
                    'color' => $cl['color'],
                    'mixed_by_computer' => $cl['mixed_by_computer'],
                    'is_deep_color' => $cl['is_deep_color'],
                    'is_popular' => $cl['is_popular'],
                    'color_group_id' => $colorGrp->id
                ]);
                if ($color) {
                    $color->surfaces()->sync($cl['surfaces']);
                    $color->projecttypes()->sync($cl['projectTypes']);
                }
            }
        }
    }
}
