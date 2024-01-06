import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log ('OnInit CurriculumPage')
  }

  ionViewWillEnter()
  {
    console.log ('ionViewWillEnter CurriculumPage')
  }

  ionViewDidEnter(){
    console.log ('ionViewDidEnter CurriculumPage')
  }

  ionViewWillLeave()
  {
    console.log ('ionViewWillLeave CurriculumPage')
  }

  ionViewDidLeave(){
    console.log ('ionViewDidLeave CurriculumPage')
  }

  ngOnDestroy() {
    console.log ('OnDestroy CurriculumPage')
  }

}
