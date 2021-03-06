import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// Provider
import {EasyCard} from '../../providers/easy-card.provider';

//Page

import {ThemePage} from '../theme/theme';

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
  public easyCard = new Array;
  public newEasyCard = new Object(); 

  constructor(public navCtrl: NavController, public navParams: NavParams, public _easyCard: EasyCard) {


  }

  // add a new easy Card 
  addEasyCard(){
      this._easyCard.addEasyTheme(this.newEasyCard)
      this.navCtrl.pop();
  }
  

}
