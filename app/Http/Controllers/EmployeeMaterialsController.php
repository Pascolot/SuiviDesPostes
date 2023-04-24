<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Employee2;
use App\Models\Materials;
use App\Models\Materials2;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmployeeMaterialsController extends Controller
{

    public function showEmployeeMaterials($idMaterials)
    {
        try {

            $res = Materials::where("employees_Matricule", $idMaterials)->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showEmployeeMaterials2($idMateriels)
    {
        try {
            $res = Materials2::where("employees_Matricule", $idMateriels)->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function deleteEmployeeMaterials(Request $request)
    {
        try {
            $id = $request->get("Matricule");
            Employee2::where("Matricule", $id)->delete();
        } catch (Exception $error) {
            Log::error($error);
        }
    }
}
