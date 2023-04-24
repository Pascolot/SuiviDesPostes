<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Employee2;
use App\Models\Employee3;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class OtherController extends Controller
{

    public function index()
    {
        $user = Auth::user();
        return response()->json($user);
    }


    public function finish()
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

    public function livefinish($search)
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

    public function showed()
    {
        try {
            $res = Employee3::where("send", 1)->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showTrashData()
    {
        try {

            $result = Employee::onlyTrashed()->get();
            return response()->json($result);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function showTrashData2()
    {
        try {

            $result = Employee2::onlyTrashed()->get();
            return response()->json($result);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function restoreData(Request $request)
    {
        try {

            $id = $request->get("id");

            Employee::onlyTrashed()
                ->where("Matricule", $id)
                ->restore();
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function restoreData2(Request $request)
    {
        try {

            $id = $request->get("id");

            Employee2::onlyTrashed()
                ->where("Matricule", $id)
                ->restore();
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function sending(Request $request)
    {
        try {

            $id = $request->get("Matricule");

            Employee2::where("Matricule", $id)->update([
                "send" => 1,
                "notif" => 1,
            ]);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function sending2(Request $request)
    {
        try {

            $id = $request->get("Matricule");

            Employee3::where("Matricule", $id)->update([
                "send" => 1,
                "notif" => 1,
            ]);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function notif()
    {
        try {
            $res = Employee2::where("notif", 1)->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function notif2()
    {
        try {
            $res = Employee3::where("notif", 1)->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function notif3()
    {
        try {
            $res = Employee::where("rapport", 1)->get();
            return response()->json($res);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function reset()
    {
        try {
            Employee::where("rapport", 1)->update([
                "rapport" => 0,
            ]);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function reset2()
    {
        try {
            Employee2::where("notif", 1)->update([
                "notif" => 0,
            ]);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function reset3()
    {
        try {
            Employee3::where("notif", 1)->update([
                "notif" => 0,
            ]);
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function deleteDefintively(Request $request)
    {
        try {

            $id = $request->get("id");

            Employee::onlyTrashed()
                ->where("Matricule", $id)
                ->forceDelete();
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }

    public function deleteDefintively2(Request $request)
    {
        try {

            $id = $request->get("id");
            Employee2::onlyTrashed()
                ->where("Matricule", $id)
                ->forceDelete();
        } catch (Exception $exc) {
            Log::error($exc);
        }
    }
}
