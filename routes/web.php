<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EmployeeMaterialsController;
use App\Http\Controllers\MaterialsController;
use App\Http\Controllers\ProblemsController;
use App\Http\Controllers\OtherController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//route d'orgine
Route::get('/', function () {
    return view('welcome');
});

//auth routes
Route::get('/home', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');


require __DIR__ . '/auth.php';

/*
 * route pour les employés
*/
Route::get("employeeList", [EmployeeController::class, 'showEmployeeList']);
Route::get("employeeList2", [EmployeeController::class, 'showEmployeeList2']);
Route::get("employeeList3", [EmployeeController::class, 'showEmployeeList3']);
Route::get("employeeList/{search}", [EmployeeController::class, 'showEmployeeListSearch']);
Route::get("employeeListAll", [EmployeeController::class, 'showAllEmployees']);
Route::get("employeeListSend", [EmployeeController::class, 'showAllEmployeesSend']);
Route::get("employeeListSending", [EmployeeController::class, 'showAllEmployeesSend2']);
Route::get("employeeListSend/{search}", [EmployeeController::class, 'showAllEmployeesSendSearch']);
Route::get("employeeListSending/{search}", [EmployeeController::class, 'showAllEmployeesSendSearch2']);
Route::get("employeeListFinishing", [EmployeeController::class, 'employeeListFinished']);
Route::get("employeeListFinishing/{search}", [EmployeeController::class, 'employeeListFinishedSearch']);
Route::post("employeeList", [EmployeeController::class, 'createEmployee']);
Route::post("updateEmployeeList", [EmployeeController::class, 'editEmployee']);
Route::post("/deleteEmployee", [EmployeeController::class, 'deleteEmployee']);

/*
 * route pour les matériaux
*/
Route::get("materialsList", [MaterialsController::class, 'showMaterialsList']);
Route::get("materialsList2", [MaterialsController::class, 'showMaterialsList2']);
Route::post("listMaterials", [MaterialsController::class, 'createMatrials']);
Route::post("listMaterials2", [MaterialsController::class, 'createMatrials2']);
Route::post("updateListMaterials", [MaterialsController::class, 'update']);
Route::post("updateListMaterials2", [MaterialsController::class, 'update2']);
Route::post("updateEmployeeMateriels", [MaterialsController::class, 'update3']);

/*
 * route pour les employés associent aux matériaux
*/
Route::get("employeeMaterialsList/{idMaterials}", [EmployeeMaterialsController::class, 'showEmployeeMaterials']);
Route::get("employeeMaterielsList/{idMateriels}", [EmployeeMaterialsController::class, 'showEmployeeMaterials2']);
Route::post("/deleteEmployeeMaterials", [EmployeeMaterialsController::class, 'deleteEmployeeMaterials']);

/*
 * route pour les problèmes
*/
Route::get("problems/{matricule}", [ProblemsController::class, 'show']);
Route::post("problems", [ProblemsController::class, 'create']);

/*
 * route pour les autres traitements
*/
Route::get("notification", [OtherController::class, 'notif']);
Route::get("notification2", [OtherController::class, 'notif2']);
Route::get("notification3", [OtherController::class, 'notif3']);
Route::get("userName", [OtherController::class, 'index']);
Route::get("corbeille", [OtherController::class, 'showTrashData']);
Route::get("corbeille2", [OtherController::class, 'showTrashData2']);
Route::post("reset", [OtherController::class, 'reset']);
Route::post("reset2", [OtherController::class, 'reset2']);
Route::post("reset3", [OtherController::class, 'reset3']);
Route::post("corbeilleRecup", [OtherController::class, 'restoreData']);
Route::post("corbeilleRecup2", [OtherController::class, 'restoreData']);
Route::post("corbeilleDef", [OtherController::class, 'deleteDefintively']);
Route::post("corbeilleDef2", [OtherController::class, 'deleteDefintively2']);
Route::post("sending", [OtherController::class, 'sending']);
Route::post("sending2", [OtherController::class, 'sending2']);


// pour éviter le 404 not found du route react
Route::view('/{path?}', 'dashboard')
    ->where('path', '.*');
