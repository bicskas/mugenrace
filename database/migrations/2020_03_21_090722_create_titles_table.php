<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTitlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('titles', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->enum('place',['home', 'about', 'sponsor','products','download'])->default('home');
            $table->timestamps();
        });

        Schema::create('title_translations', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('title_id')->index();
            $table->char('lang', 2);
            $table->string('title', 255)->nullable();
            $table->string('subtitle', 255)->nullable();

            $table->unique(array('title_id', 'lang'));
        });

        Schema::table('title_translations', function(Blueprint $table) {
            $table->foreign('title_id')->references('id')->on('titles')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('title_translations');
        Schema::dropIfExists('titles');
    }
}
