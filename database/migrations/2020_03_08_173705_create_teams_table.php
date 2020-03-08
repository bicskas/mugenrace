<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('crops')->nullable();
            $table->integer('sorrend')->default(1);
            $table->timestamps();
        });

        Schema::create('team_translations', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('team_id')->index();
            $table->char('lang', 2);
            $table->string('name', 255)->nullable();
            $table->text('content')->nullable();

            $table->unique(array('team_id', 'lang'));
        });

        Schema::table('team_translations', function(Blueprint $table) {
            $table->foreign('team_id')->references('id')->on('teams')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('team_translations');
        Schema::dropIfExists('teams');
    }
}
