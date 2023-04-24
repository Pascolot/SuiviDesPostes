<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaterials2sTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materials2s', function (Blueprint $table) {
            $table->id();
            $table->mediumText("Designation");
            $table->mediumText("Marque")->default("Pas de marque");
            $table->integer("Nombre")->default(1);
            $table->tinyText("Etat")->default("Aucun");
            $table->date("Date_d_obtention")->nullable();
            $table->unsignedBigInteger("employees_Matricule");
            $table->foreign('employees_Matricule')->references('Matricule')->on('employees')->onDelete('cascade');
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
        Schema::dropIfExists('materials2s');
    }
}
