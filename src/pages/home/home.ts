import { Component } from '@angular/core';
/* Se importan el alert controller para la alerta */
import { NavController, AlertController } from 'ionic-angular';
import { ApplePage } from '../apple/apple';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public myAlert: AlertController) {

  }

  otherPage() {
    this.navCtrl.push(ApplePage);
  }

  basicAlert() {
    let alert = this.myAlert.create({
      title: 'Titulo de la alerta',
      message: 'Mensaje de la alerta',
      buttons: ['Entendido']
    });
    alert.present();
  }

  basicAlert2() {
    let alert2 = this.myAlert.create({
      title: 'Titulo de la alerta2',
      message: 'Mensaje de la alerta2',
      inputs: [
       {
         name: 'Titulo',
         placeholder: 'Titulo'
       },
     ],
     buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Guardar',
        handler: data => {
          console.log('Saved clicked');
        }
      }
    ]
    });
    alert2.present();
  }
}
