import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdventuresPage } from './adventures';

@NgModule({
  declarations: [
    AdventuresPage,
  ],
  imports: [
    IonicPageModule.forChild(AdventuresPage),
  ],
})
export class AdventuresPageModule {}
