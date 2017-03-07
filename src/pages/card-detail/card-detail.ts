import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CardDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-card-detail',
  templateUrl: 'card-detail.html'
})
export class CardDetailPage {

  public toEdit = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  Edit(){
    this.toEdit = !this.toEdit;
  }

}
