import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';

/**
 * Generated class for the ProveedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proveedor',
  templateUrl: 'proveedor.html',
})
export class ProveedorPage {

  users;

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor:Proveedor1Provider) {}

  ionViewDidLoad() {
    this.proveedor.getInformation()
    .subscribe(
      (data) => {this.users = data;},
      (error)=> {console.log(error);}
    )
  }

}
