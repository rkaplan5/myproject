import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EndPage } from '../EndPage/EndPage'
import { FoodPage } from '../todo/food/food';
import { AdventuresPage } from '../todo/adventures/adventures';
import { KeepingFitPage } from '../todo/keeping-fit/keeping-fit';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'page-Profile',
  templateUrl: 'Profile.html'
})
export class Profile {
  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  userLocation = { lat:0, lng:0 };


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
	  }
  ]



  constructor(public navCtrl: NavController) {
    
    navigator.geolocation.getCurrentPosition((position)=>
    this.userLocation = {
lat: position.coords.latitude,
lng: position.coords.longitude})

   }
  
// need to make the log out funtional 
  NavigateToEndPage() {
    localStorage.removeItem("TOKEN")
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


// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
}
