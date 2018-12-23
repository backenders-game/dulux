<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateColorSurfacesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('color_surfaces', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('color_id');
            $table->unsignedInteger('surface_id');
            $table->timestamps();

            $table->foreign('color_id')->references('id')->on('colors')
                ->onDelete('cascade');
            $table->foreign('surface_id')->references('id')->on('surfaces')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('color_surfaces');
    }
}
