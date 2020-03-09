<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBelsoSzovegsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('belso_szovegs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('hely');
            $table->timestamps();
        });

        Schema::create('belso_szoveg_translations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('belso_szoveg_id')->index();
            $table->char('lang', 2);
            $table->string('title', 255)->nullable();
            $table->text('content')->nullable();

            $table->unique(array('belso_szoveg_id', 'lang'));
        });

        Schema::table('belso_szoveg_translations', function (Blueprint $table) {
            $table->foreign('belso_szoveg_id')->references('id')->on('belso_szovegs')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('belso_szoveg_translations');
        Schema::dropIfExists('belso_szovegs');
    }
}
