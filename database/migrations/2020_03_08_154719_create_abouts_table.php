<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAboutsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abouts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('crops')->nullable();
            $table->integer('sorrend')->default(1);
            $table->timestamps();
        });

        Schema::create('about_translations', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('about_id')->index();
            $table->char('lang', 2);
            $table->string('title', 255)->nullable();
            $table->string('subtitle', 255)->nullable();
            $table->string('link', 255)->nullable();
            $table->text('content')->nullable();

            $table->unique(array('about_id', 'lang'));
        });

        Schema::table('about_translations', function(Blueprint $table) {
            $table->foreign('about_id')->references('id')->on('abouts')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('about_translations');
        Schema::dropIfExists('abouts');
    }
}
