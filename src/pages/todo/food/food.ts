import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Activity } from '../../../models/activity';

/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {

  public activities: Array<Activity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    var act1 = new Activity();
    act1.name = "The Bungalow";
    act1.note = "Clifton Beach";
    act1.note2 = "";
    act1.link = "https://www.thebungalow.co.za/";
    this.activities.push(act1);

    var act2 = new Activity();
    act2.name = "Moyo";
    act2.note = "Various locations";
    act2.note2 = "African style meat";
    act2.link = "http://www.moyo.co.za/moyo-kirstenbosch";
    this.activities.push(act2);

    var act3 = new Activity();
    act3.name = "Brass Bell";
    act3.note = "Kalk Bay";
    act3.note2 = "";
    act3.link = "http://www.brassbell.co.za/wmenu.php";
    this.activities.push(act3);

    var act4 = new Activity();
    act4.name = "Groot Constantia";
    act4.note = "Constantia";
    act4.note2 = "wine tasting";
    act4.link = "https://www.grootconstantia.co.za/the-experience/wine-tasting/?id=67";
    this.activities.push(act4);

    var act5 = new Activity();
    act5.name = "";
    act5.note = "";
    act5.note2 = "";
    act5.link = "www.link.2";
    this.activities.push(act5);

    var act6 = new Activity();
    act6.name = "";
    act6.note = "";
    act6.note2 = "";
    act6.link = "www.link.2";
    this.activities.push(act6);

    var act7 = new Activity();
    act7.name = "";
    act7.note = "";
    act7.note2 = "";
    act7.link = "www.link.2";
    this.activities.push(act7);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
  }

}
