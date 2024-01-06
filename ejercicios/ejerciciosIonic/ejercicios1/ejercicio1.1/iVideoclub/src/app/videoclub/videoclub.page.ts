import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasAPIService } from '../services/peliculas-api.service';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy {

  listaPeliculas : any;

  modoLista = true;

  constructor(private router : Router, private peliculasAPIService : PeliculasAPIService) { 
    
    peliculasAPIService.getPeliculas().subscribe(
      result => {
        this.listaPeliculas = result;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    console.log ('OnInit VideoclubPage')
  }

  ionViewWillEnter()
  {
    console.log ('ionViewWillEnter VideoclubPage')
  }

  ionViewDidEnter(){
    console.log ('ionViewDidEnter VideoclubPage')
  }

  ionViewWillLeave()
  {
    console.log ('ionViewWillLeave VideoclubPage')
  }

  ionViewDidLeave(){
    console.log ('ionViewDidLeave VideoclubPage')
  }

  ngOnDestroy() {
    console.log ('OnDestroy VideoclubPage')
  }

  seeFilm(id : number)
  {
    this.router.navigate(['/detalle', id])
  }

  cambiarVista()
  {
    this.modoLista = !this.modoLista
  }
}
