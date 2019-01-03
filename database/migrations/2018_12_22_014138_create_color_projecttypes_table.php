<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateColorProjecttypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('color_projecttypes', function (Blueprint $table) {
            $table->unsignedInteger('color_id');
            $table->unsignedInteger('project_type_id');

            $table->foreign('color_id')->references('id')->on('colors')
                ->onDelete('cascade');
            $table->foreign('project_type_id')->references('id')->on('project_types')
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
        Schema::dropIfExists('color_projecttypes');
    }
}
