<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB; //Database Query Function
use App\Models\Programs;


class UserController extends Controller
{
    public function getPrograms(Request $request){
        $users = DB::table('riic_programs')->get();
        return response()->json(['status' => 200, 'data' => $users]);
        
    }

    public function getConsultancy(Request $request){
        $users = DB::table('riic_consultancy')->get();
        return response()->json(['status' => 200, 'data' => $users]);
        
        $users = DB::table('riic_consultancy')->paginate(10);
        return view ('riic_consultancy', [
            'status' => $users
        ]);
    }

    public function getTechnology(Request $request){
        $users = DB::table('riic_tbi')->get();
        return response()->json(['status' => 200, 'data' => $users]);
        
    }

    public function getNegosyo(Request $request){
        $users = DB::table('riic_negosyo_centers')->get();
        return response()->json(['status' => 200, 'data' => $users]);
        
    }

    public function getShared(Request $request){
        $users = DB::table('riic_share_service_facility')->get();
        return response()->json(['status' => 200, 'data' => $users]);
        
    }

    public function getResearch(Request $request){
        $users = DB::table('riic_rnd_facilities')->get();
        return response()->json(['status' => 200, 'data' => $users]);
        
    }
    public function getHigher(Request $request){
        $users = DB::table('riic_academia_ched_sucs')->get();
        return response()->json(['status' => 200, 'data' => $users]);
        
    }
    public function getMicro(Request $request){
        $users = DB::table('riic_msmes')->get();
        return response()->json(['status' => 200, 'data' => $users]);
        
    }
    public function getSector(Request $request){
        $users = DB::table('riic_priority_sectors')->get();
        return response()->json(['status' => 200, 'data' => $users]);
        
    }
    public function getEconomic(Request $request){
        $users = DB::table('riic_eco_zones')->get();
        return response()->json(['status' => 200, 'data' => $users]);
        
    }


     public function addPrograms(Request $request){

       $addUser= Programs::create($request->all());
       return response($addUser, 201);
       

    
         echo $request;

         $data=[
             'program_name'=>$request->program,
             'sector'=>$request->sector,
             'province'=>$request->province,
             'company_agency'=>$request->company,
             'address'=>$request->address,
             'email'=>$request->email,
             'contact_number'=>$request->contact,
             'description'=>$request->description
         ];

         $addUser=DB::table('riic_programs')->updateOrInsert($data);
        
         return response()->json($addUser,201);

    }


    public function userlogin(Request $request){
        if ($request->username == 'admin' && $request->password == 'password') {
            return response()->json(['status' => true, 'message' => 'Login Successfully!']);
        } else {
            return response()->json(['status' => false, 'message' => 'Sucessfully Failed!']);
        }
    }

}
