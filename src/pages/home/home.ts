import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogInPage } from '../LogInPage/LogInPage';
import { Reg } from '../Reg/Reg';
import { Http } from '@angular/http'; //for intergrating 
import 'rxjs/add/operator/map'; // for intergrating 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any; // for intergrating on (page/home/html)

  constructor(public navCtrl: NavController, public http: Http) { 
  
    //edit to include the intergrated things from home.html
    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
      this.posts = data.data.children; // this is whats intergrated 
  
  // this means its checking the local storage that the user's logged in. 
  // the code for creating this is in the loginpage.ts

  if (localStorage.getItem("TOKEN")) {
    alert("Already logged in");
  
    this.http.get("http://localhost:3000/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
      result => {
        console.log(result.json());
      },

      err => {
        // Invalid, login!
      }
    );

  }
    });

  }  

  NavigateToLogInPage() {  // this is telling the computer what to do from the html function.
    // can add other things for it to do in here...
    this.navCtrl.push(LogInPage);
  }

  NavigateToReg() {
    this.navCtrl.push(Reg);

  }

}

