<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSzoveg extends Migration
{

    private $mezok = array(
        'seotitle',
        'seokeywords',
        'seodescription',
        'ogtitle',
        'ogdescription',
    );

    private function seo(Blueprint $table) {
        foreach ($this->mezok as $mezo) {
            $table->text($mezo)->nullable();
        }
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('szoveg', function(Blueprint $table) {
            $table->bigIncrements('id');
        });

        Schema::create('szoveg_forditas', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('szoveg_id')->index();
            $table->char('lang', 2);
            $table->string('cim', 255);
            $table->string('link', 255);
            $table->text('szoveg')->nullable();
            $this->seo($table);

            $table->unique(array('szoveg_id', 'lang'));
        });

        Schema::table('szoveg_forditas', function(Blueprint $table) {
            $table->foreign('szoveg_id')->references('id')->on('szoveg')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('szoveg_forditas');
        Schema::dropIfExists('szoveg');
    }
}
