import { Component, NgModule } from '@angular/core';
import { NavController, IonicPage, NavParams, IonicPageModule } from 'ionic-angular';
import { Profile } from '../Profile/Profile';
import { Http } from '@angular/http';

// above is what the page needs to run any function 

//@IonicPage()
@Component({
  selector: 'page-Reg',
  templateUrl: 'Reg.html'
})
// what page to ask for if you want the page
export class Reg {

  // this is the NG being passed to from the html 
  // this is adding the info to the export Array {} above 
  public username: string;
  public password: string;
  public email: string;

  // what is in the page
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {}

  registration() {
    // this http links backend project to front end project ie myproject and IX
       //need to add http in the constructor and on the import list
      this.http
   // post is where and what information is being sent
   // this is where the backend is using.
        .post("http://localhost:3000/registration", {
          email: this.email,
          username: this.username, 
          password: this.password,
        }).subscribe(
          result => {
            console.log(result.json());
          },
          err => {
            console.log(err)
          }
        )
        }

/* for online app
        this.http.post("https://giver-api.herokuapp.com/register", {
      name: this.name,
      email: this.email,
      password: this.password,
    }).subscribe(
      result => {console.log("Navigating...");
      this.navCtrl.push(HomePage);
    },
    err => {
      console.log(err)
    }

ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    */

    //the below button doesnt exist anymore - the button now goes to register
NavigateToProfile() {
  this.navCtrl.push(Profile);
}

}
