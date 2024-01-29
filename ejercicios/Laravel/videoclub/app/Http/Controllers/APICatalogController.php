<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;


class APICatalogController extends Controller
{
    public function index(){
        return response()->json(Movie::all());
    }
    public function show($id){
        return response()->json(Movie::findOrFail($id));
    }
    public function store(Request $request){
        $movie = new Movie;
        $movie->title = $request->input('title');
        $movie->year = $request->input('year');
        $movie->director = $request->input('director');
        $movie->poster = $request->input('poster');
        $movie->rented = false;
        $movie->synopsis = $request->input('synopsis');
        $movie->save();

        return response()->json(['error' => false,
                                    'msg' => 'La película se ha creado']);
    }
   
    public function update(Request $request, $id){

        $movie = Movie::findOrFail($id);
        if ($request->input('title'))
            $movie->title = $request->input('title');
        if ($request->input('year'))
            $movie->year = $request->input('year');
        if ($request->input('director'))
            $movie->director = $request->input('director');
        if ($request->input('poster'))
            $movie->poster = $request->input('poster');
        if ($request->input('synopsis'))
            $movie->synopsis = $request->input('synopsis');
        $movie->save();
        
        return response()->json(['error' => false,
                                    'msg' => 'La película se ha editado con exito']);
    }
    public function destroy($id){
        $movie = Movie::findOrFail($id);
        $movie->delete();
        return response()->json(['error' => false,
        'msg' => 'La película se ha eliminado']);
    }

    public function putRent($id){
        $m = Movie::findOrFail($id);
        $m->rented = true;
        $m->save();
        return response()->json(['error' => false,
                                    'msg' => 'La película se ha marcado como alquilada']);
    }
    public function putReturn($id){
        $m->rented = true;
        $m->save();
        return response()->json(['error' => false,
                                    'msg' => 'La película se ha devuelto']);
    }
}


