import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasAPIService } from '../services/peliculas-api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pelicula : any

  mPeliculasAPI :  PeliculasAPIService
  constructor(private activatedRoute : ActivatedRoute, peliculasAPI : PeliculasAPIService) {
    this.mPeliculasAPI = peliculasAPI;
   }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id)

    this.mPeliculasAPI.getPelicula(id).subscribe(
      result => {
        this.pelicula = result;
      },
      err => {
        console.log(err);
      }
    );

  }

}
