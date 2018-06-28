import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../Profile/Profile';

@Component({
  selector: 'page-LogInPage',
  templateUrl: 'LogInPage.html'
})
export class LogInPage {

  constructor(public navCtrl: NavController) {}

  NavigateToProfile() {
    this.navCtrl.push(Profile);
  }
  }