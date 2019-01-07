<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    use TruncateTable;

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->truncateMultiple([
            'cache',
            'jobs',
            'sessions',
        ]);

        $this->call(AuthTableSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(ColorGroupSeeder::class);
        $this->call(PropertySeeder::class);
        $this->call(FinishSurfaceSeeder::class);
        $this->call(SurfaceSeeder::class);
        $this->call(ProjectTypeSeeder::class);
        // $this->call(ColorWhiteSeeder::class);
        // $this->call(ColorRedSeeder::class);
        // $this->call(ColorOrangeSeeder::class);
        // $this->call(ColorGoldenSeeder::class);
        // $this->call(ColorYellowSeeder::class);
        // $this->call(ColorLemonYellowSeeder::class);
        // $this->call(ColorGreenSeeder::class);
        // $this->call(ColorTealGreenSeeder::class);
        // $this->call(ColorBlueSeeder::class);
        // $this->call(ColorVioletBlueSeeder::class);
        // $this->call(ColorNaturalSeeder::class);
        // $this->call(ColorLandSeeder::class);
        Model::reguard();
    }
}
