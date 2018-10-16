import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  list: Array<any> = [
    {
      title: "Perro",
      icon: "leaf"
    },
    {
      title: "Carro",
      icon: "car"
    },
    {
      title: "Carro",
      icon: "rose"
    }

  ]
  constructor(public navCtrl: NavController) {

  }

}
