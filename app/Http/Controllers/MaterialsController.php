<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Employee;
use App\Models\Employee2;
use App\Models\Employee3;
use App\Models\Materials;
use App\Models\Materials2;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MaterialsController extends Controller
{

    public function showMaterialsList()
    {
        try {
            $res = Materials::all()->take(3);
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showMaterialsList2()
    {
        try {
            $res = Materials2::all()->take(6);
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function createMatrials(Request $request)
    {
        try {
            $M_UC = $request->get("uc");
            $M_ECR1 = $request->get("ecr1");
            $M_ECR2 = $request->get("ecr2");
            $M_OND = $request->get("ond");
            $UC = $request->get("UC");
            $ECR = $request->get("ECR");
            $OND = $request->get("OND");
            $N_UC = $request->get("N_UC");
            $N_ECR1 = $request->get("N_ECR1");
            $N_ECR2 = $request->get("N_ECR2");
            $N_OND = $request->get("N_OND");
            $reference = $request->get('reference');

            Materials::create([

                'Nom' => $N_UC,
                'Designation' => $UC,
                'Marque' => $M_UC,
                'employees_Matricule' => $reference,

            ]);

            if ($N_ECR1 !== null && $N_ECR2 !== null && $M_ECR1 !== null && $M_ECR2 !== null) {
                $N_ECR_fusion =  $N_ECR1 . "/" . $N_ECR2;
                $M_ECR_fusion = $M_ECR1 . "/" . $M_ECR2;

                Materials::create([

                    'Nom' => $N_ECR_fusion,
                    'Designation' => $ECR,
                    'Marque' => $M_ECR_fusion,
                    'Nombre' => 2,
                    'employees_Matricule' => $reference,

                ]);
            } else {
                Materials::create([

                    'Nom' => $N_ECR1,
                    'Designation' => $ECR,
                    'Marque' => $M_ECR1,
                    'employees_Matricule' => $reference,

                ]);
            }
            Materials::create([

                'Nom' => $N_OND,
                'Designation' => $OND,
                'Marque' => $M_OND,
                'employees_Matricule' => $reference,

            ]);

            Employee2::where("Matricule", $reference)->update([
                "preparing" => 1,
            ]);
        } catch (Exception $error) {
            Log::error($error);
        }
    }

    public function createMatrials2(Request $req)
    {
        try {
            $Souris = $req->get("Souris");
            $M_souris = $req->get("M_souris");
            $Clavier = $req->get("Clavier");
            $M_clavier = $req->get("M_clavier");
            $Box_wifi = $req->get("Box_wifi");
            $M_Box_wifi = $req->get("M_box_wifi");
            $Prise = $req->get("Prise");
            $Alim = $req->get("Alim");
            $Cable = $req->get("Cable");
            $Nb_alim = $req->get("Nb_alim");

            $reference = $req->get('ref');

            if ($M_souris === null) {
                $M_souris = "Pas de marque";
            }
            if ($M_clavier === null) {
                $M_clavier = "Pas de marque";
            }
            if ($M_Box_wifi === null) {
                $M_Box_wifi = "Pas de marque";
            }

            Materials2::create([

                'Designation' => $Souris,
                'Marque' => $M_souris,
                'employees_Matricule' => $reference,

            ]);

            Materials2::create([

                'Designation' => $Clavier,
                'Marque' => $M_clavier,
                'employees_Matricule' => $reference,

            ]);

            Materials2::create([

                'Designation' => $Box_wifi,
                'Marque' => $M_Box_wifi,
                'employees_Matricule' => $reference,

            ]);

            Materials2::create([

                'Designation' => $Prise,
                'employees_Matricule' => $reference,

            ]);

            if ($Cable === "Câble VGA") {
                Materials2::create([

                    'Designation' => $Cable,
                    'employees_Matricule' => $reference,

                ]);
            } else {
                Materials2::create([

                    'Designation' => $Cable,
                    'Nombre' => 2,
                    'employees_Matricule' => $reference,

                ]);
            }

            Materials2::create([

                'Designation' => $Alim,
                'Nombre' => $Nb_alim,
                'employees_Matricule' => $reference,

            ]);
        } catch (Exception $error) {
            Log::error($error);
        }
    }

    public function update(Request $request)
    {
        try {
            $M_UC = $request->get("uc");
            $M_ECR1 = $request->get("ecr1");
            $M_ECR2 = $request->get("ecr2");
            $M_OND = $request->get("ond");
            $UC = $request->get("UC");
            $ECR = $request->get("ECR");
            $OND = $request->get("OND");
            $N_UC = $request->get("N_UC");
            $N_ECR1 = $request->get("N_ECR1");
            $N_ECR2 = $request->get("N_ECR2");
            $N_OND = $request->get("N_OND");
            $reference = $request->get('reference');
            $id1 = $request->get("id1");
            $id2 = $request->get("id2");
            $id3 = $request->get("id3");

            // s'il le marque ne pas de valeur, nous ne faisons pas le mis à jour
            if ($M_UC !== null) {
                Materials::where("id", $id1)->update([
                    'Nom' => $N_UC,
                    'Designation' => $UC,
                    'Marque' => $M_UC,
                ]);
            }

            if ($M_ECR1 !== null || $M_ECR2 !== null) {
                if ($N_ECR1 !== null && $N_ECR2 !== null && $M_ECR1 !== null || $M_ECR2 !== null) {
                    $N_ECR_fusion =  $N_ECR1 . "/" . $N_ECR2;
                    $M_ECR_fusion = $M_ECR1 . "/" . $M_ECR2;

                    Materials::where("id", $id2)->update([

                        'Nom' => $N_ECR_fusion,
                        'Designation' => $ECR,
                        'Marque' => $M_ECR_fusion,

                    ]);
                } else {
                    Materials::where("id", $id2)->update([

                        'Nom' => $N_ECR1,
                        'Designation' => $ECR,
                        'Marque' => $M_ECR1,

                    ]);
                }
            }

            if ($M_OND !== null) {
                Materials::where("id", $id3)->update([

                    'Nom' => $N_OND,
                    'Designation' => $OND,
                    'Marque' => $M_OND,
                    'employees_Matricule' => $reference,

                ]);
            }
        } catch (Exception $error) {
            Log::error($error);
        }
    }

    public function update2(Request $req)
    {
        try {
            $Souris = $req->get("Souris");
            $M_souris = $req->get("M_souris");
            $Clavier = $req->get("Clavier");
            $M_clavier = $req->get("M_clavier");
            $Box_wifi = $req->get("Box_wifi");
            $M_Box_wifi = $req->get("M_box_wifi");
            $Alim = $req->get("Alim");
            $Nb_alim = $req->get("Nb_alim");
            $Cable = $req->get("Cable");
            $id4 = $req->get("id4");
            $id5 = $req->get("id5");
            $id6 = $req->get("id6");
            $id7 = $req->get("id7");
            $id8 = $req->get("id8");

            if ($M_souris !== null) {
                Materials2::where("id", $id4)->update([

                    'Designation' => $Souris,
                    'Marque' => $M_souris,

                ]);
            }

            if ($M_clavier !== null) {

                Materials2::where("id", $id5)->update([

                    'Designation' => $Clavier,
                    'Marque' => $M_clavier,

                ]);
            }

            if ($M_Box_wifi !== null) {

                Materials2::where("id", $id6)->update([

                    'Designation' => $Box_wifi,
                    'Marque' => $M_Box_wifi,

                ]);
            }

            if ($Cable === "Câble VGA") {

                Materials2::where("id", $id7)->update([

                    'Designation' => $Cable,
                    'Nombre' => 1,

                ]);
            } else {

                Materials2::where("id", $id7)->update([

                    'Designation' => $Cable,
                    'Nombre' => 2,

                ]);
            }

            Materials2::where("id", $id8)->update([

                'Designation' => $Alim,
                'Nombre' => $Nb_alim,

            ]);
        } catch (Exception $error) {
            Log::error($error);
        }
    }

    public function update3(Request $req)
    {
        try {
            $etat = $req->get("etat");
            $date = $req->get("date");
            $id = $req->get("idEmployee");

            // uc / ecr / ond
            Materials::where("employees_Matricule", $id)->update([
                "etat" => $etat,
                "Date_d_obtention" => $date,
            ]);

            // souris, clavier, câble alim, câble VGA, prise multiple, box wifi
            Materials2::where("employees_Matricule", $id)->update([
                "etat" => $etat,
                "Date_d_obtention" => $date,
            ]);

            Employee3::where("Matricule", $id)->update([
                "rapport" => 1,
            ]);

            Employee::where("Matricule", $id)->update([
                "rapport" => 1,
            ]);
        } catch (Exception $error) {
            Log::error($error);
        }
    }
}
