<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDownloadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('downloads', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->enum('type',['catalog','document'])->default('catalog');
            $table->integer('sorrend')->default(1);
            $table->timestamps();
        });

        Schema::create('download_translations', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('download_id')->index();
            $table->char('lang', 2);
            $table->string('title', 255)->nullable();
            $table->string('format')->nullable();

            $table->unique(array('download_id', 'lang'));
        });

        Schema::table('download_translations', function(Blueprint $table) {
            $table->foreign('download_id')->references('id')->on('downloads')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('download_translations');
        Schema::dropIfExists('downloads');
    }
}
