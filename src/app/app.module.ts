import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
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
    PaymentPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
