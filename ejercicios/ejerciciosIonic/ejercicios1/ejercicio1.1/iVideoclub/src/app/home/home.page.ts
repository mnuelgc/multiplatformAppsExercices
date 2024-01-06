import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {
    console.log ('OnInit Home')
  }

  ionViewWillEnter()
  {
    console.log ('ionViewWillEnter Home')
  }

  ionViewDidEnter(){
    console.log ('ionViewDidEnter Home')
  }

  ionViewWillLeave()
  {
    console.log ('ionViewWillLeave Home')
  }

  ionViewDidLeave(){
    console.log ('ionViewDidLeave Home')
  }

  ngOnDestroy() {
    console.log ('OnDestroy Home')
  }
}
