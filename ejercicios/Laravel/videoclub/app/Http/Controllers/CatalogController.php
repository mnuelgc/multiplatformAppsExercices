<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Movie;
use Alert;



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

        Alert::success('Guardado con éxito', 'La película se ha guardado con éxito');

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
        
        Alert::success('Editado con éxito', 'La película se ha editado con éxito');
        return redirect()->action([CatalogController::class, 'getShow'], [$id]);
    }

    public function putRent(Request $request, $id){
        $movie = Movie::findOrFail($id);
        $movie->rented = true;
        $movie->save();

        Alert::success('Alquilada', 'La película se ha alquilado con éxito');
        return redirect()->action([CatalogController::class, 'getShow'], [$id]);
    }

    public function putReturn(Request $request, $id){
        $movie = Movie::findOrFail($id);
        $movie->rented = false;
        $movie->save();

        Alert::success('Devuelta', 'La película se ha devuelto con éxito');
        return redirect()->action([CatalogController::class, 'getShow'], [$id]);
    }

    public function deleteMovie(Request $request, $id){
        $movie = Movie::findOrFail($id);
        $movie->delete();

        Alert::success('Película borrada', 'Película borrada con éxito');
        return redirect()->action([CatalogController::class, 'getIndex']);
    }
}
