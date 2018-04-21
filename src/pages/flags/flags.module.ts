import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlagsPage } from './flags';

@NgModule({
  declarations: [
    FlagsPage,
  ],
  imports: [
    IonicPageModule.forChild(FlagsPage),
  ],
})
export class FlagsPageModule {}
