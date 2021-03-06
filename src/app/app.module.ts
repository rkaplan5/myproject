import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, ApplicationRef } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogInPage } from '../pages/LogInPage/LogInPage';
import { Reg } from '../pages/Reg/Reg'; 
import { Profile } from '../pages/Profile/Profile';
import { EndPage } from '../pages/EndPage/EndPage'
import { ProvidersPage } from '../pages/providers/providers';
import { FoodPage } from '../pages/todo/food/food';
import { AdventuresPage } from '../pages/todo/adventures/adventures';
import { KeepingFitPage } from '../pages/todo/keeping-fit/keeping-fit';
import { PaymentPage } from '../pages/payment/payment';
import { UserReportPage } from '../pages/user-report/user-report'
import { WorkoutsPage } from '../pages/workouts/workouts'
import { HttpModule } from '@angular/http'; // for intergrating 
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    Reg,
    Profile,
    EndPage,
    ProvidersPage,
    FoodPage,
    AdventuresPage,
    KeepingFitPage,
    PaymentPage,
    UserReportPage,
    WorkoutsPage,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    HttpModule, // for intergating (page/home.ts)
    //google maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOcIU3Glf45SIHCXfHS5fJTdtER214WJI'
    })
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    Reg,
    Profile,
    EndPage,
    ProvidersPage,
    FoodPage,
    AdventuresPage,
    KeepingFitPage,
    PaymentPage,
    UserReportPage,
    WorkoutsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
