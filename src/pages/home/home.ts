import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogInPage } from '../LogInPage/LogInPage';
import { Reg } from '../Reg/Reg';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  NavigateToLogInPage() {
    // other stuff...
    this.navCtrl.push(LogInPage);
  }

  NavigateToReg() {
    // other stuff...
    this.navCtrl.push(Reg);

  }

}

