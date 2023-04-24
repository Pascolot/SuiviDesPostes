<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaterialsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materials', function (Blueprint $table) {
            $table->id();
            $table->string("Nom")->unique();
            $table->mediumText("Designation");
            $table->mediumText("Marque");
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
        Schema::dropIfExists('materials');
    }
}
