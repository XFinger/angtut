import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { FlagDetailsPage } from '../flag-details/flag-details'

@IonicPage()
@Component({
  selector: 'page-flags',
  templateUrl: 'flags.html',
})
export class FlagsPage {
  countries: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider) {
  }

  ionViewDidLoad() {
    this.getCountries();
    console.log('ionViewDidLoad FlagsPage');
  }
   getCountries() {
     this.rest.getCountries()
     .subscribe(
       countries => this.countries = countries,
       error => this.errorMessage = <any>error);
   }
   itemTapped(event, item) {
    this.navCtrl.push(FlagDetailsPage, {
      item: item
    });
  }
}
