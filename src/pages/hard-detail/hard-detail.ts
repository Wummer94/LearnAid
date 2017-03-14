import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the HardDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hard-detail',
  templateUrl: 'hard-detail.html'
})
export class HardDetailPage {

  public toEdit = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HardDetailPage');
  }

    Edit(){
    this.toEdit = !this.toEdit;
  }

}
