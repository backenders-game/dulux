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

        Model::reguard();
    }
}
