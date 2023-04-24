<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Employee;
use App\Models\Employee2;
use App\Models\Employee3;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmployeeController extends Controller
{

    public function createEmployee(Request $req)
    {
        try {
            $matricule = $req->get("matricule");
            $nom = $req->get("nom");
            $prenom = $req->get("prenom");
            $sexe = $req->get("genre");
            $poste = $req->get("poste");
            $adresse = $req->get("adresse");
            $contact = $req->get("contact");

            Employee::create([
                "Matricule" => $matricule,
                "Nom" => $nom,
                "Prenom" => $prenom,
                "Genre" => $sexe,
                "Poste_occupe" => $poste,
                "Adresse" => $adresse,
                "Contact" => $contact,
            ]);

            Employee2::create([
                "Matricule" => $matricule,
                "Nom" => $nom,
                "Prenom" => $prenom,
                "Genre" => $sexe,
                "Poste_occupe" => $poste,
                "Adresse" => $adresse,
                "Contact" => $contact,
            ]);

            Employee3::create([
                "Matricule" => $matricule,
                "Nom" => $nom,
                "Prenom" => $prenom,
                "Genre" => $sexe,
                "Poste_occupe" => $poste,
                "Adresse" => $adresse,
                "Contact" => $contact,
            ]);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showEmployeeList()
    {
        try {
            $res = Employee::all();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showEmployeeListSearch($search)
    {
        try {
            $res = Employee::where("Nom", 'like', '%' . $search . '%')
                ->orWhere("Prenom", 'like', '%' . $search . '%')
                ->orWhere("Genre", 'like', '%' . $search . '%')
                ->orWhere("Poste_occupe", 'like', '%' . $search . '%')
                ->orWhere("Matricule", 'like', '%' . $search . '%')
                ->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showEmployeeList2()
    {
        try {
            $res = Employee2::where("send", 1)
                ->where("preparing", 0)
                ->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showAllEmployees()
    {
        try {
            $res = Employee3::all();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showAllEmployeesSend()
    {
        try {
            $res = Employee2::where("send", 1)
                ->where("preparing", 1)
                ->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showAllEmployeesSendSearch($search)
    {
        try {
            $res = Employee2::where("send", 1)
                ->where("preparing", 1)
                ->where("Matricule", 'like', '%' . $search . '%')
                ->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showAllEmployeesSend2()
    {
        try {
            $res = Employee3::where("send", 1)
                ->where("rapport", 0)
                ->get();;
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showAllEmployeesSendSearch2($search)
    {
        try {

            $res = Employee3::where("send", 1)
                ->where("rapport", 0)
                ->Where("Matricule", 'like', '%' . $search . '%')
                ->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showEmployeeList3()
    {
        try {
            $res = Employee3::where("send", 1)->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function employeeListFinished()
    {
        try {
            $res = Employee3::where("send", 1)
                ->where("rapport", 1)
                ->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function employeeListFinishedSearch($search)
    {
        try {

            $res = Employee3::where("rapport", 1)
                ->where("Matricule", 'like', '%' . $search . '%')
                ->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function editEmployee(Request $req)
    {
        try {
            $matricule = $req->get("matricule");
            $nom = $req->get("nom");
            $prenom = $req->get("prenom");
            $sexe = $req->get("genre");
            $poste = $req->get("poste");
            $adresse = $req->get("adresse");
            $contact = $req->get("contact");

            Employee::where("Matricule", $matricule)->update([
                "Matricule" => $matricule,
                "Nom" => $nom,
                "Prenom" => $prenom,
                "Genre" => $sexe,
                "Poste_occupe" => $poste,
                "Adresse" => $adresse,
                "Contact" => $contact,
            ]);

            Employee2::where("Matricule", $matricule)->update([
                "Matricule" => $matricule,
                "Nom" => $nom,
                "Prenom" => $prenom,
                "Genre" => $sexe,
                "Poste_occupe" => $poste,
                "Adresse" => $adresse,
                "Contact" => $contact,
            ]);

            Employee3::where("Matricule", $matricule)->update([
                "Matricule" => $matricule,
                "Nom" => $nom,
                "Prenom" => $prenom,
                "Genre" => $sexe,
                "Poste_occupe" => $poste,
                "Adresse" => $adresse,
                "Contact" => $contact,
            ]);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function deleteEmployee(Request $request)
    {
        try {
            $Matricule = $request->get("Matricule");
            Employee::where("Matricule", $Matricule)->delete();
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }
}
