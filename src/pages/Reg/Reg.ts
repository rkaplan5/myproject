import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../Profile/Profile'
@Component({
  selector: 'page-Reg',
  templateUrl: 'Reg.html'
})
export class Reg {

  constructor(public navCtrl: NavController) {}

NavigateToProfile() {
  this.navCtrl.push(Profile);
}
}