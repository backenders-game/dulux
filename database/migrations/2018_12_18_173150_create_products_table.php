<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50); // ten sp
            $table->string('description')->nullable(); // mo ta ngan ve sp
            $table->text('introduction')->nullable(); // gioi thieu san pham
            $table->text('user_manual')->nullable(); // huong dan su dung
            $table->text('construction_guide')->nullable(); // thong tin huong dan thi cong
            $table->text('protection_info')->nullable(); // Thong tin an toan suc khoe - moi truong.
            $table->unsignedInteger('finish_surface_id')->nullable()->default(null); // be mat hoan thien
            $table->integer('coverage')->nullable(); // do bao phu
            $table->string('drying_time')->nullable(); // thoi gian kho
            $table->integer('num_layer')->nullable()->default(1); //  so lop
            $table->timestamps(); 
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
