import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pelicula : any

  peliculas :  PeliculasService
  constructor(private activatedRoute : ActivatedRoute, peliculas : PeliculasService) {
    this.peliculas = peliculas;
   }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id)

    this.pelicula = this.peliculas.getPelicula(id);

  }

}
