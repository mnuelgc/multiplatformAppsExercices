
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
        
        <?php
            if($pelicula->rented)
            {
                echo "<p><strong>Estado</strong> Película actualmente alquilada </p>";

                echo "<a class ='btn btn-danger' href='#'>Devolver película </a>";

            }
            else{
                echo "<p><strong>Estado</strong> Película disponible </p>";
                echo "<a class ='btn btn-primary' href='#'>Alquilar </a>";

            }
        ?>


        <a href ="{{ url('/catalog/edit/' . $pelicula->id ) }}" class = "btn btn-warning "> <span class ="fa-solid fa-pen-to-square"></span> Editar Pelicula</a>
        <a href ="{{ url('/') }}" class = "btn btn-light"> <span class ="fa-solid fa-caret-left"></span>Volver al listado</a>

    </div>
</div>
<script src="https://kit.fontawesome.com/d9d4402dc1.js" crossorigin="anonymous"></script>

@endsection