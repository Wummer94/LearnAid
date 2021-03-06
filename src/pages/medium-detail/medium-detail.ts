import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {MediumCard} from '../../providers/medium-card.provider';

/*
  Generated class for the MediumDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-medium-detail',
  templateUrl: 'medium-detail.html'
})
export class MediumDetailPage {
 
  public toEdit = false;
  public newMediumCard = new Object();

  constructor(public navCtrl: NavController, public navParams: NavParams, public MediumCard:MediumCard) {
  }


  // add a new medium Card 
  addMediumCard(){
    this.MediumCard.addMediumTheme(this.newMediumCard);
    this.navCtrl.pop();
  }



}
