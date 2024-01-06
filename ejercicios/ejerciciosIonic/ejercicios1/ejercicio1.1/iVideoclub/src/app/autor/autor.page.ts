import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log ('OnInit AutorPage')
  }

  ionViewWillEnter()
  {
    console.log ('ionViewWillEnter AutorPage')
  }

  ionViewDidEnter(){
    console.log ('ionViewDidEnter AutorPage')
  }

  ionViewWillLeave()
  {
    console.log ('ionViewWillLeave AutorPage')
  }

  ionViewDidLeave(){
    console.log ('ionViewDidLeave AutorPage')
  }

  ngOnDestroy() {
    console.log ('OnDestroy AutorPage')
  }

}
