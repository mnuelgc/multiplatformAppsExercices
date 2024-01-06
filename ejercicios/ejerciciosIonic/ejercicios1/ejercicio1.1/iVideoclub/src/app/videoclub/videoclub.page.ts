import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy {

  constructor() { }

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
}
