import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EndPage } from '../EndPage/EndPage'
import { FoodPage } from '../todo/food/food';
import { AdventuresPage } from '../todo/adventures/adventures';
import { KeepingFitPage } from '../todo/keeping-fit/keeping-fit';

@Component({
  selector: 'page-Profile',
  templateUrl: 'Profile.html'
})
export class Profile {

  constructor(public navCtrl: NavController) { }
  

  NavigateToEndPage() {
    this.navCtrl.push(EndPage);
  }

  NavigateToFoodPage() {
    this.navCtrl.push(FoodPage);
    }
  NavigateToAdventuresPage() {
      this.navCtrl.push(AdventuresPage);
    }
  NavigateToKeepingFitPage() {
        this.navCtrl.push(KeepingFitPage);
    }
  }

