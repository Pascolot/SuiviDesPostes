<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployee3sTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee3s', function (Blueprint $table) {
            $table->id("Matricule");
            $table->string("Nom");
            $table->string("Prenom");
            $table->string("Genre")->default("Masculin");
            $table->mediumText("Poste_occupe");
            $table->mediumText("Adresse");
            $table->string('Contact');
            $table->boolean("send")->default(false);
            $table->boolean("rapport")->default(false);
            $table->boolean("notif")->default(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee3s');
    }
}
