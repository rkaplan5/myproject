import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../Profile/Profile';
import { Http } from '@angular/http';

// above is what the page needs to run any function 

@Component({
  selector: 'page-Reg',
  templateUrl: 'Reg.html'
})
// what is being sent from the page
export class Reg {
  public username: string;
  public password: string;
  public email: string;

  // what is in the page
  constructor(public navCtrl: NavController, private http: Http) {}

  registration() {
    // this http links backend project to front end project ie myproject and IX
      this.http
      //need to add http above in the constructor and on the import list
        .post("http://localhost:3000/registration", {
          email: this.email,
          username: this.username, 
          password: this.password
        })
        }

NavigateToProfile() {
  this.navCtrl.push(Profile);
}

}