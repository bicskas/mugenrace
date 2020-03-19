<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBelsoKepsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('belso_keps', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('crops')->nullable();
            $table->integer('sorrend')->default(1);
            $table->enum('place',['home', 'about', 'sponsor','produtcs','subpage','download'])->default('home');
            $table->timestamps();
        });

        Schema::create('belso_kep_translations', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('belso_kep_id')->index();
            $table->char('lang', 2);
            $table->string('title', 255)->nullable();
            $table->string('subtitle', 255)->nullable();

            $table->unique(array('belso_kep_id', 'lang'));
        });

        Schema::table('belso_kep_translations', function(Blueprint $table) {
            $table->foreign('belso_kep_id')->references('id')->on('belso_keps')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('belso_kep_translations');
        Schema::dropIfExists('belso_keps');
    }
}
