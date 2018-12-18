<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateColorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('colors', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 30);
            $table->string('color', 20);
            $table->unsignedInteger('color_group_id');
            $table->tinyInteger('is_deep_color')->nullable()->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('color_group_id')
                ->references('id')->on('color_groups')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('colors');
    }
}
