import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 

@Component({
  selector: 'page-flag-details',
  templateUrl: 'flag-details.html',
})
export class FlagDetailsPage {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.selectedItem=navParams.get('item');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlagDetailsPage');
  }

}
