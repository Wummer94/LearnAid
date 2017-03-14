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
    //this.topics = Topic.getAllTopics();
    console.log(this.topics);
  }

// Select on topic in a list and go to the themen Page
topicSelected(item){
  this.navCtrl.push(ThemePage, {id: item.id});
}

// should delete a Topic but dont
deleteTopic(){
  this.Topic.deleteTopic(this.topics);
}

// Pushes the page topic detail then you can make a new topic
newTopic(){
  this.navCtrl.push(TopicDetailPage);
}

}
