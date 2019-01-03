<?php

use Illuminate\Database\Seeder;
use App\Models\Color;
use App\Models\ColorGroup;
use App\Models\Surface;
use App\Models\ProjectType;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $surfaces = SUrface::get();
        $projectTypes = ProjectType::get();
        $surfaceIds = [];
        $projectIds = [];
        if ($surfaces) {
            foreach ($surfaces as $surface) {
                $surfaceIds[] = $surface->id;
            }
        }
        if ($projectTypes) {
            foreach ($projectTypes as $projecttype) {
                $projectIds[] = $projecttype->id;
            }
        }

        $normalWhites = [
            ['name' => "Vanilla Sensation", 'color' => "#F7F0DF", 'is_deep_color'  => 0, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Ivory Sparkle", 'color' => "#F7EBDC", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name' => 'Polar Heights', 'color' => "#F6F2E5", 'is_deep_color'  => 0, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name'  => "Chantilly Cream", 'color' => "#F6EBD8", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "White Tutu", 'color' => "#F5EFE5", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Marshmallow Touch", 'color' => "#F5EEE5", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "42YY 87/084", 'color' => "#F5EBD9", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Arizona White", 'color' => "#F5EBD9", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "61YY 89/040", 'color' => "#F4F0E4", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "Ophelia", 'color' => "#F4E9D7", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "40YY 83/086", 'color' => "#F4E9D7", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Ivory Fantasy", 'color' => "#F4E9D6", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Purest Frost", 'color' => "#F3F2EC", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Linen Lush", 'color' => "#F3EDDD", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Emily's Expression", 'color' => "#F3E8D4", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "45YY 83/094", 'color' => "#F3E8D4", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Cotton Fantasy", 'color' => "#F2F1E5", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Brave Baby", 'color' => "#F2EFE5", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Wedding Capel", 'color' => "#F2EDE3", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Fluffy Clouds", 'color' => "#F2ECE6", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "White Wallwash", 'color' => "#F2ECE5", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "53YY 87/070", 'color' => "#F2EAD9", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "20YY 83/075", 'color' => "#F2E8D9", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "Wonderland White", 'color' => "#F1F1ED", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Clinic White", 'color' => "#F1F0E8", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "61YY 85/050", 'color' => "#F1EDE0", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "03YY 86/021", 'color' => "#F1ECE5", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "40YY 83/064", 'color' => "#F1E9DC", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "80YR 83/044", 'color' => "#F1E8E0", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "29YY 84/067", 'color' => "#F1E8DA", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "50YY 83/086", 'color' => "#F1E8D4", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Neutral Garden", 'color' => "#F1E7D3", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Frosty Feeling", 'color' => "#F0EEE5", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "81YY 87/031", 'color' => "#F0EEE3", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "Cotton Breeze", 'color' => "#F0EDE4", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "66YY 85/045", 'color' => "#F0EDE2", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "70YR 83/034", 'color' => "#F0E8E2", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Whitney White", 'color' => "#F0E8E2", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Captured Light", 'color' => "#F0E7E1", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "60YR 83/034", 'color' => "#F0E7E1", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "88YR 82/046", 'color' => "#F0E5DB", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "82YY 85/038", 'color' => "#EFEDE2", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "10YY 83/029", 'color' => "#EFE9E1", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Faux Naturale", 'color' => "#EFE9E1", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "40YY 83/043", 'color' => "#EFE9DF", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "20YY 83/050", 'color' => "#EFE8DD", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "50YY 83/057", 'color' => "#EFE8DA", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Mystic Mist", 'color' => "#EFE8D9", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "00YY 83/046", 'color' => "#EFE5DC", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Enlightened Peach", 'color' => "#EFE5DC", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Delaney's Blossom", 'color' => "#EFE4DA", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "00YY 83/057", 'color' => "#EFE4DA", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "White On White", 'color' => "#EEEFEA", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "30GY 88/014", 'color' => "#EEEFEA", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "Elegant Cotton", 'color' => "#EEEFE8", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "44YY 84/042", 'color' => "#EEE9DE", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "White Whisper", 'color' => "#EEE9DE", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "90YR 83/035", 'color' => "#EEE7DF", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "50YR 83/025", 'color' => "#EEE6E2", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Inner Peace", 'color' => "#EEE6E2", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "90RB 83/015", 'color' => "#EDEAEB", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Summer Wedding", 'color' => "#EDEAEB", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Soft Shimmer", 'color' => "#EDE8E4", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "50YR 83/020", 'color' => "#EDE8E4", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "20YY 83/025", 'color' => "#EDE8E2", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Egret", 'color' => "#EDE8DD", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "39YY 85/046", 'color' => "#EDE8DD", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Tusk Tusk", 'color' => "#EDE3D5", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "30YY 79/070", 'color' => "#EDE3D5", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Dewdrop Grey", 'color' => "#ECEDE7", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "90YR 83/018", 'color' => "#ECE9E4", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "70YY 83/037", 'color' => "#ECE9E0", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "60YY 83/062", 'color' => "#ECE6D8", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Natural Sensation", 'color' => "#ECE2D1", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Smokey Hint", 'color' => "#EBEAE8", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Natural White", 'color' => "#EBE7DE", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "50YY 83/029", 'color' => "#EBE7DE", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Cielo Blanco", 'color' => "#EBE6DA", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "43YY 81/051", 'color' => "#EBE6DA", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Mindblowing Morning", 'color' => "#EAE4DB", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "30YY 79/053", 'color' => "#EAE3D7", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Opal", 'color' => "#EAE3D7", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Remain Neutral", 'color' => "#EAE0CD", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "39YY 77/091", 'color' => "#EAE0CD", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Crystal", 'color' => "#E9EAE9", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "50BG 83/009", 'color' => "#E9EAE9", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Moonlight Sonata", 'color' => "#E9E9E9", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "30BB 83/013", 'color' => "#E9E9E9", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Magnolia Springs", 'color' => "#E9E9E7", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "50BB 83/006", 'color' => "#E9E9E7", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "50RB 83/005", 'color' => "#E9E7E6", 'is_deep_color'  => 0, 'is_popular' => 1,'mixed_by_computer' => 1],
            ['name'  => "Drifting Snow", 'color' => "#E8EAE9", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "10BB 83/014", 'color' => "#E8EAE9", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "White Cube", 'color' => "#E8E3DC", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "Natural Yoghurt", 'color' => "#E7E4D9", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1],
            ['name'  => "City Sensation", 'color' => "#E6E7E4", 'is_deep_color'  => 0, 'is_popular' => 0,'mixed_by_computer' => 1]
        ];

        $deepWhites = [
            ['name' => "45YY 83/062", 'color' => "#F0E8DA", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Stowe White", 'color' => "#F0E8DA", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "60YR 83/026", 'color' => "#EFE8E2", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Angel Hair", 'color' => "#EFE8E2", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "20YY 83/038", 'color' => "#EFE8DF", 'is_deep_color' => 1,'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "Calm Winds", 'color' => "#EFE7E0", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "80YR 83/035", 'color' => "#EFE7E0", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Mellow Snow", 'color' => "#EEEDE5", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Cuddle", 'color' => "#EEE7E1", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "80YR 83/026", 'color' => "#EEE7E1", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Secret Affair", 'color' => "#EDE8E3", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "60YR 83/017", 'color' => "#EDE8E3", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "80YR 83/017", 'color' => "#EDE8E2", 'is_deep_color' => 1,'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "Tranquil Mist", 'color' => "#EDE8DF", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "70YR 83/026", 'color' => "#EDE7E1", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Sand Dollar Shell", 'color' => "#EDE7E1", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "51YY 83/060", 'color' => "#EDE6D8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "55YR 83/024", 'color' => "#EDE4DE", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "30YY 83/012", 'color' => "#ECEAE6", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Cloudy Sunday", 'color' => "#ECE9E2", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Wedding White", 'color' => "#ECE9E0", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "90RR 83/009", 'color' => "#ECE8E5", 'is_deep_color' => 1,'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "10YY 83/014", 'color' => "#EBE8E4", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "40YY 83/021", 'color' => "#EBE8E1", 'is_deep_color' => 1,'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "43YY 78/053", 'color' => "#EBE5D8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Winterwash", 'color' => "#EAE8E5", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Sheer Sensation", 'color' => "#EAE8E5", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "50YR 83/003", 'color' => "#EAE8E5", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "50YR 83/010", 'color' => "#EAE8E4", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "50YR 83/015", 'color' => "#EAE6E1", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Baby Girl", 'color' => "#EAE6E1", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Baby Girl", 'color' => "#EAE6E1", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "50GY 83/010", 'color' => "#E9EAE5", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Penguin Walk", 'color' => "#E9E8E8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "90BB 83/011", 'color' => "#E9E8E8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Pearl Drop", 'color' => "#E8EAEB", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Atmosphere", 'color' => "#E8EAE9", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "30GG 83/006", 'color' => "#E8E9E7", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Crystal Glimmer", 'color' => "#E8E8EB", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Song Porcelain", 'color' => "#E8E8E5", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "00NN 83/000", 'color' => "#E8E8E5", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Silk Moon", 'color' => "#E8E8E4", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "30BB 83/001", 'color' => "#E8E8E4", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "81YY 81/016", 'color' => "#E8E7E3", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Quiet Hideaway", 'color' => "#E8E7E3", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Precious Paper", 'color' => "#E8E4E0", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "98YR 78/041", 'color' => "#E8E0D8", 'is_deep_color' => 1,'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "40YY 75/084", 'color' => "#E8DECE", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "30GG 83/013", 'color' => "#E7EAE8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "50GG 83/011", 'color' => "#E7EAE6", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Winter's Day", 'color' => "#E7EAE6", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Energetic Mirage", 'color' => "#E7E0D3", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "10BB 83/017", 'color' => "#E6E9E9", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Nova White", 'color' => "#E6E9E9", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "90GG 83/011", 'color' => "#E6E9E6", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Snowed In", 'color' => "#E6E9E6", 'is_deep_color' => 1,'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "Kitten White", 'color' => "#E6E1D8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "30YY 78/035", 'color' => "#E6E1D8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "White Wisdom", 'color' => "#E5E0DC", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Wash Out", 'color' => "#E5DFD7", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Barcelona Rain", 'color' => "#E4E7E9", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "59BB 81/022", 'color' => "#E4E7E9", 'is_deep_color' => 1,'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "30YY 78/018", 'color' => "#E4E1DB", 'is_deep_color' => 1,'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "Winter Bird", 'color' => "#E4E1DB", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Woodwind", 'color' => "#E4DBD0", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "20YY 74/055", 'color' => "#E4DBD0", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "40YY 74/056", 'color' => "#E3DDD2", 'is_deep_color' => 1,'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "10YY 73/042", 'color' => "#E3DCD4", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Chilly Morning", 'color' => "#E2E7E7", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "56BG 81/023", 'color' => "#E2E7E7", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Velvet Rain", 'color' => "#E2E5E6", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Winters Walk", 'color' => "#E1E2DD", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Pelican", 'color' => "#DEDCD7", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "09BB 77/019", 'color' => "#DDE2E2", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "30YY 72/009", 'color' => "#DDDCD9", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "50RR 72/010", 'color' => "#DDDAD8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "30RB 73/016", 'color' => "#DCDBDB", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "70BB 73/030", 'color' => "#DBDDE0", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Star-crossed", 'color' => "#DBDDE0", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "White Rabbit", 'color' => "#DDDAD8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "90BB 73/027", 'color' => "#DCDCE0", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Ice Ballet", 'color' => "#DCDBDB", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Pacific Mist", 'color' => "#EDE6D8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Teacup", 'color' => "#EDE4DE", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Fresh Air", 'color' => "#ECEAED", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Simple", 'color' => "#E9E8E8", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "10BB 83/020", 'color' => "#E6EAEA", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Autumnal Equinox", 'color' => "#E3DCD4", 'is_deep_color' => 1,'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "70BB 74/040", 'color' => "#DBDCE2", 'is_deep_color' => 1, 'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "50BG 72/006", 'color' => "#DBDCDA", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Arctic Char", 'color' => "#DBDBDD", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "90BB 73/022", 'color' => "#DBDBDD", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Groovy Grey", 'color' => "#DAE0E2", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "70BB 73/020", 'color' => "#DADBDC", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "White Wisteria", 'color' => "#DADBDC", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "50GY 72/012", 'color' => "#DADBD6", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "The Plaza", 'color' => "#DADBD6", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Touch Of Grey", 'color' => "#DADAD9", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "30BB 72/003", 'color' => "#DADAD9", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Grey Clouds", 'color' => "#D9DAD8", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "00NN 72/000", 'color' => "#D8D8D7", 'is_deep_color' => 1, 'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "Snowfield", 'color' => "#D8D8D7", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "Shaded Ice", 'color' => "#D7D9D6", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => "30GG 72/008", 'color' => "#D7D9D6", 'is_deep_color' => 1, 'is_popular' => 0, 'mixed_by_computer' => 1],
            ['name' => '10YY 72/021', 'color' => "#DFDAD5", 'is_deep_color' => 1, 'is_popular' => 1, 'mixed_by_computer' => 1],
            ['name' => "Heatherbelle", 'color' => "#E0DAD5", 'is_deep_color' => 1, 'is_popular' => 1, 'mixed_by_computer' => 1]
        ];

        $availableWhites = [
            ['name' => "76824", 'color' => "#F7E9D2", 'is_deep_color' => 0, 'is_popular' => 1,'mixed_by_computer' => 0],
            ['name' => "25155", 'color' => "#F6F7F3", 'is_deep_color' => 0, 'is_popular' => 1,'mixed_by_computer' => 0],
            ['name' => "76925", 'color' => "#F0EBDE", 'is_deep_color' => 0, 'is_popular' => 1,'mixed_by_computer' => 0],
            ['name' => "74380", 'color' => "#E8E9DF", 'is_deep_color' => 0, 'is_popular' => 1,'mixed_by_computer' => 0],
            ['name' => "21312", 'color' => "#E6EAEA", 'is_deep_color' => 0, 'is_popular' => 1,'mixed_by_computer' => 0],
            ['name' => "76245", 'color' => "#DFE5DF", 'is_deep_color' => 0, 'is_popular' => 1,'mixed_by_computer' => 0],
            ['name' => "71560", 'color' => "#DEE0E0", 'is_deep_color' => 0, 'is_popular' => 1,'mixed_by_computer' => 0, ]
        ];

        $whiteColorGroup = ColorGroup::where('name', 'Họ màu trắng')->first();
        if ($whiteColorGroup) {
            foreach($normalWhites as $norWhite) {
                $norWhite['color_group_id'] = $whiteColorGroup->id;
                $color = Color::create($norWhite);
                $color->surfaces()->sync($surfaceIds);
                $color->projecttypes()->sync($projectIds);
            }

            foreach($deepWhites as $deepWhite) {
                $deepWhite['color_group_id'] = $whiteColorGroup->id;
                $color = Color::create($deepWhite);
                $color->surfaces()->sync($surfaceIds);
                $color->projecttypes()->sync($projectIds);
            }

            foreach($availableWhites as $avaiWhite) {
                $avaiWhite['color_group_id'] = $whiteColorGroup->id;
                $color = Color::create($avaiWhite);
                $color->surfaces()->sync($surfaceIds);
                $color->projecttypes()->sync($projectIds);
            }
        }
    }
}
