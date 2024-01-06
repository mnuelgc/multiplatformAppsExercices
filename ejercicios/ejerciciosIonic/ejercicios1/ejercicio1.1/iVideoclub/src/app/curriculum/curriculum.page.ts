import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit, OnDestroy {

  listaTrabajos : {
    lugar : string,
    fecha : string, 
    desc : string
  }[];

  constructor() { 

    this.listaTrabajos = [{lugar : "Universidad de Alicante", fecha : "2023 - Actualidad", desc :"Cursando master en el desarrollo de software para dispositivos móviles"},
                          {lugar : "IES La Nucía", fecha : "2023 - Actualidad", desc : "Profesor Departamento de Informática IES La Nucía"},
                          {lugar : "IES Pere María Orts i Bosch", fecha : "2023 - Actualidad", desc : "Profesor Departamento de Informática IES Pere María Orts i Bosch"},
                          {lugar : "Crisalix", fecha : "2022", desc : "Desarrollador unity 3D y VR"},
                          {lugar : "Cype", fecha : "2018 - 2021", desc : "Desarrollador Unity 3D Ar y VR"}]
  }

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
