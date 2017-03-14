import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

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


  public newTopic = new Object();
  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, public Topic:Topic) {
  }
  

  // add a new Topic and go back to the main topic page
  saveTopic(){
    this.Topic.addTopicToApi(this.newTopic);
    this.navCtrl.setRoot(TopicPage);
  }
}
