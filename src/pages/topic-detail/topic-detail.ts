import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//Pages
import { TopicPage } from '../topic/topic';

// Providers
import {Topic} from '../../providers/topic.provider';

/*
  Generated class for the TopicDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-topic-detail',
  templateUrl: 'topic-detail.html'
})
export class TopicDetailPage {

  public topic = new Array;
  public newTopic = new Object();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public Topic:Topic) {
    this.topic = Topic.getAllTopics();
  
  }

  saveTopic(){
    this.Topic.addTopic(this.newTopic);
    this.navCtrl.setRoot(TopicPage);
  }

}
