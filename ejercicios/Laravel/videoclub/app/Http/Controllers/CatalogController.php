<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Movie;



class CatalogController extends Controller
{
   
    public function getIndex(){
        $movies = Movie::all(); 

        return view('catalog.index', ['arrayPeliculas' => $movies]);
    }


    public function getShow($id){
        return view('catalog.show', ['pelicula' => Movie::findOrFail($id)]);  
    }


    public function getCreate(){
        return view('catalog.create');
    }


    public function getEdit($id){
        return view('catalog.edit',  ['pelicula' => Movie::findOrFail($id)]);
    }

    public function postCreate(Request $request){
        $movie = new Movie;
        $movie->title = $request->input('title');
        $movie->year = $request->input('year');
        $movie->director = $request->input('director');
        $movie->poster = $request->input('poster');
        $movie->rented = false;
        $movie->synopsis = $request->input('synopsis');
        $movie->save();

        return redirect()->action([CatalogController::class, 'getIndex']);
    }

    public function putEdit(Request $request, $id){
        $movie = Movie::findOrFail($id);
        $movie->title = $request->input('title');
        $movie->year = $request->input('year');
        $movie->director = $request->input('director');
        $movie->poster = $request->input('poster');
        $movie->synopsis = $request->input('synopsis');
        $movie->save();
        
        return redirect()->action([CatalogController::class, 'getShow'], [$id]);
    }
}
