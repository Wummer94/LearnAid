import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Pages
import {CardDetailPage} from '../card-detail/card-detail';
import {HardDetailPage} from '../hard-detail/hard-detail';
import {MediumDetailPage} from '../medium-detail/medium-detail';


//Providers
import {EasyCard} from '../../providers/easy-card.provider';
import {HardCard} from '../../providers/hard-card.provider';
import {MediumCard} from '../../providers/medium-card.provider';

/*
  Generated class for the Theme page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html'
})
export class ThemePage {

  public easyThemes;
  public mediumThemes;
  public hardThemes
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public EasyCard: EasyCard,
  public MediumCard: MediumCard,
  public HardCard: HardCard ) {
    this.easyThemes = EasyCard.getAllEasyThemes();
    this.mediumThemes = MediumCard.getAllMediumThemes();
    this.hardThemes = HardCard.getAllHardThemes();
  }

  selectListItem(type) {
    let detailPage;
    if (type == 'easy') {
      detailPage = CardDetailPage;
    }
    if (type == 'medium') {
      detailPage = MediumDetailPage;
    }
    if (type == 'hard') {
      detailPage = HardDetailPage;
    }

    if (detailPage) {
      this.navCtrl.push(detailPage, {}); //id: item.id 
    }
  }


newEasyTheme(){
 this.navCtrl.push(CardDetailPage);
}

newMediumTopic(){
  this.navCtrl.push(MediumDetailPage);
}

newHardTopic(){
  this.navCtrl.push(HardDetailPage);
}

}
