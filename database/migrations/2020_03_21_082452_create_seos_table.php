<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSeosTable extends Migration
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
        Schema::create('seos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->morphs('seoable');
            $table->timestamps();
        });

        Schema::create('seo_translations', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('seo_id')->index();
            $table->char('lang', 2);
            $this->seo($table);

            $table->unique(array('seo_id', 'lang'));
        });

        Schema::table('seo_translations', function(Blueprint $table) {
            $table->foreign('seo_id')->references('id')->on('seos')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('seo_translations');
        Schema::dropIfExists('seos');
    }
}
