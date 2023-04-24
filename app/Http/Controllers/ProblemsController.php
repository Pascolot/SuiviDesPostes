<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Employee;
use App\Models\Problems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProblemsController extends Controller
{

    public function show($matricule)
    {
        try {

            $res = Problems::where("employees_Matricule", $matricule)->get();
            return response()->json($res);
        } catch (Exception $error) {
            Log::error($error);
        }
    }

    public function create(Request $request)
    {
        try {
            $matricule = $request->get("matricule");
            $designation = $request->get("designation");
            $description = $request->get("description");

            Problems::create([
                "Designation" => $designation,
                "Description" => $description,
                "employees_Matricule" => $matricule,
            ]);
            Employee::where("Matricule", $matricule)->update([
                "rapport" => 1,
            ]);
        } catch (Exception $error) {
            Log::error($error);
        }
    }
}
