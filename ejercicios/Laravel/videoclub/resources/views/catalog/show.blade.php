
@extends('layouts.master')

@section('content')


<div class="row">

    <div class="col-sm-4">

    <img src="{{$pelicula->poster}}" style="height:200px"/>
         
    </div>
    <div class="col-sm-8">
    
        <h3 style="min-height:45px;margin:5px 0 10px 0">
                {{$pelicula->title}}
        </h3>

        <h4 style="min-height:35px;margin:5px 0 10px 0">
                Año: {{$pelicula->year}}
        </h4>

        <h4 style="min-height:35px;margin:5px 0 10px 0">
                Director: {{$pelicula->director}}
        </h4>

        
        <p><strong>Resumen</strong> {{$pelicula->synopsis}}</p>
        
        <?php if($pelicula->rented) : ?>
   


            <p><strong>Estado</strong> Película actualmente alquilada </p>
            <form action="{{route('returnFilm', ['id' => $pelicula->id])}}" 
                method="POST" style="display:inline">
                @method('PUT')
                @csrf
                <button type="submit" class="btn btn-danger" style="display:inline">
                    Devolver película
                </button>
            </form>
        <?php else : ?>
            <p><strong>Estado</strong> Película disponible </p>
            <form action="{{route('rentFilm', ['id' => $pelicula->id])}}" 
                method="POST" style="display:inline">
                @method('PUT')
                @csrf
                <button type="submit" class="btn btn-primary" style="display:inline">
                    Alquilar
                </button>
            </form>
        <?php endif; ?>


        <a href ="{{ url('/catalog/edit/' . $pelicula->id ) }}" class = "btn btn-warning "> <span class ="fa-solid fa-pen-to-square"></span> Editar Pelicula</a>
        <a href ="{{ url('/') }}" class = "btn btn-light"> <span class ="fa-solid fa-caret-left"></span>Volver al listado</a>

        <form action="{{route('deleteFilm', ['id' => $pelicula->id])}}" 
            method="POST" style="display:inline">
            @method('DELETE')
            @csrf
            <button type="submit" class="btn btn-dark" style="display:inline">
                Borrar película
            </button>
        </form>
    </div>
</div>
<script src="https://kit.fontawesome.com/d9d4402dc1.js" crossorigin="anonymous"></script>

@endsection