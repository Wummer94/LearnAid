import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Pages 
import {ThemePage} from '../theme/theme';
import {TopicDetailPage} from '../topic-detail/topic-detail';


// Providers
import {Topic} from '../../providers/topic.provider';

/*
  Generated class for the Topic page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-topic',
  templateUrl: 'topic.html'
})
export class TopicPage {

  public topics;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Topic:Topic ) {
    this.topics = Topic.topics;
    console.log(this.topics);
  }

topicSelected(item){
  this.navCtrl.push(ThemePage, {id: item.id});
}

newTopic(){
  this.navCtrl.push(TopicDetailPage);
}

}
