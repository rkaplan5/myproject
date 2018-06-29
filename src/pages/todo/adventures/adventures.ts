import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Activity } from '../../../models/activity';

/**
 * Generated class for the AdventuresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adventures',
  templateUrl: 'adventures.html',
})
export class AdventuresPage {

  public activities: Array<Activity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  var act1 = new Activity();
  act1.name = "Table Mountain Cable Car";
  act1.note = "Tafelberg Rd, Gardens, Cape Town, 8001";
  act1.note2 = "";
  act1.link = " http://www.tablemountain.net/";
  this.activities.push(act1);
  
  var act2 = new Activity();
  act2.name = "Kirstenbosch Botanical Gardens";
  act2.note = "Rhodes Dr, Newlands, Cape Town, 7735";
  act2.note2 = "Check for seasonal events";
  act2.link = "http://www.sanbi.org/gardens/kirstenbosch";
  this.activities.push(act2);

  var act3 = new Activity();
  act3.name = "Horse Riding";
  act3.note = "Sleepy Hollow Lane, Noordhoek, Cape Town, 7979";
  act3.note2 = "Need to arrive 45 mins before ride (or can fill in online forms)";
  act3.link = " http://www.sleepyhollowhorseriding.com/beach-rides/";
  this.activities.push(act3);

  var act4 = new Activity();
  act4.name = "Seal Snorkelling";
  act4.note = "Hout Bay";
  act4.note2 = "";
  act4.link = "  http://sealsnorkeling.com/";
  this.activities.push(act4);

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdventuresPage');
  }

}
