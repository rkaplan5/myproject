import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../Profile/Profile';
import { Http } from '@angular/http';

@Component({
  selector: 'page-LogInPage',
  templateUrl: 'LogInPage.html'
})
export class LogInPage {

  public username: string;
  public password: string;
  public email: string;

public flag: boolean;

  constructor(
    public navCtrl: NavController, 
    private http: Http,
  public navParams: NavParams
  ) {}

  login() {
    // this http links backend project to front end project ie myproject and IX
      this.http
      //need to add http above in the constructor 
      //when deploying change this to the heroku link
        .post("https://myproject-ix.herokuapp.com/", {
          email: this.email,
          password: this.password
        })
        // fetch pasword via backend 
        .subscribe(
          result => {
            console.log(result);
  
            var jwtResponse = result.json();
            var token = jwtResponse.token;
  
            localStorage.setItem("TOKEN", token);
// above saves the token in local memory 
  
            // let t = localStorage.getItem("TOKEN");
            //above will check if password and name match 

            this.navCtrl.push(Profile);
            //is the function of the button on the HTML
          },
  
          err => {
            console.log(err);
          }
        );
 
  }
  }
  