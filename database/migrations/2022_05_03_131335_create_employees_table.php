<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id("Matricule");
            $table->string("Nom");
            $table->string("Prenom");
            $table->string("Genre")->default("Masculin");
            $table->mediumText("Poste_occupe");
            $table->mediumText("Adresse");
            $table->string('Contact');
            $table->boolean("rapport")->default(false);
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
        Schema::dropIfExists('employees');
    }
}
