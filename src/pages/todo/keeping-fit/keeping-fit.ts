import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../../payment/payment';
import { Activity } from '../../../models/activity';
import { WorkoutsPage } from '../../workouts/workouts';

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

  public activities: Array<Activity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var act1 = new Activity();
    act1.name = "Lions Head Hike";
    act1.note = "Sunrise 2.5 hours (hour up, hour down)";
    act1.note2 = "";
    act1.link = "http://hikingcapetown.co.za/hike-pages/short-hikes/lions-head-cape-town/";
    this.activities.push(act1);

    var act2 = new Activity();
    act2.name = "Sea Point Pool";
    act2.note = "Want some workout ideas, check our workout ideas.";
    act2.note2 = "";
    act2.link = "https://www.westerncape.gov.za/facility/sea-point-pavillion-swimming-pool";
    this.activities.push(act2);

    var act3 = new Activity();
    act3.name = "2";
    act3.note = "2";
    act3.note2 = "2";
    act3.link = "www.link.2";
    this.activities.push(act3);

    var act4 = new Activity();
    act4.name = "2";
    act4.note = "2";
    act4.note2 = "2";
    act4.link = "www.link.2";
    this.activities.push(act4);

    var act5 = new Activity();
    act5.name = "2";
    act5.note = "2";
    act5.note2 = "2";
    act5.link = "www.link.2";
    this.activities.push(act5);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KeepingFitPage');
  }

  NavigateToWorkoutsPage() {
    // other stuff...
    this.navCtrl.push(WorkoutsPage);
  }

}
