import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../../payment/payment';

/**
 * Generated class for the KeepingFitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-keeping-fit',
  templateUrl: 'keeping-fit.html',
})
export class KeepingFitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KeepingFitPage');
  }

  NavigateToPaymentPage() {
    // other stuff...
    this.navCtrl.push(PaymentPage);
  }

}
