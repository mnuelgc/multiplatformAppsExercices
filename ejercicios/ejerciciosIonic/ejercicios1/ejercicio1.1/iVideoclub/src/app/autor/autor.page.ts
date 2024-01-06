import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit, OnDestroy {

  autor : {
    name : string,
    email: string,
    twitter: string
    phone:string
  }

  emailLink : string
  twitterLink : string
  phoneLink : string

  constructor() {
    this.autor = {name : "Manuel Gómez", email : "manuelgc_12hotmail.com", twitter :"mnuelgc", phone :"999999999"}
  
    this.emailLink = "mailto:"+this.autor.email
    this.twitterLink = "https://twitter.com/"+this.autor.twitter
    this.phoneLink = "tel:"+this.autor.phone
   }

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
