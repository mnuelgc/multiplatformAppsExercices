import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy {

  constructor(private router : Router) { }

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
}
