<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Materials extends Model
{
    use HasFactory, SoftDeletes;


    protected $fillable = [
        'Nom',
        'Designation',
        'Marque',
        'Nombre',
        'employees_Matricule',
        'etat',
        'Date_d_obtention',
    ];
}
