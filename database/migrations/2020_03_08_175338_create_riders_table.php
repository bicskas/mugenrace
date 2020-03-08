<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('riders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('crops')->nullable();
            $table->integer('sorrend')->default(1);
            $table->timestamps();
        });

        Schema::create('rider_translations', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('rider_id')->index();
            $table->char('lang', 2);
            $table->string('name', 255)->nullable();
            $table->string('team', 255)->nullable();
            $table->string('race', 255)->nullable();
            $table->text('content')->nullable();

            $table->unique(array('rider_id', 'lang'));
        });

        Schema::table('rider_translations', function(Blueprint $table) {
            $table->foreign('rider_id')->references('id')->on('riders')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rider_translations');
        Schema::dropIfExists('riders');
    }
}
