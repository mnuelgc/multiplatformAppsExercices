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
}
