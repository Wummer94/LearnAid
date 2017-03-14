import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HardCard} from '../../providers/hard-card.provider';

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
  public newHardCard = new Object();

  constructor(public navCtrl: NavController, public navParams: NavParams, public HardCard:HardCard) {

  }

  // add a new hard Card 
  addHardCard(){
    this.HardCard.addHardTheme(this.newHardCard);
  }
  
  // change the page and now you can add new medium Cards in Input Failds
    Edit(){
    this.toEdit = !this.toEdit;
  }

}
