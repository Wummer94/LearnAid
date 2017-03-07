import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Topic provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Topic {

  public topics = new Array();

  constructor(public http: Http) {
    this.generateTopicData(); 
  }

  getTopicKeyByID(id){
    for (let key in this.topics) {
      if (this.topics[key].id == id) {
        return key;
      }
    }
 }

  getProjectById(id) {
    return this.topics[this.getTopicKeyByID(id)];
  }

 deleteTopic(id){
   let topicKey = this.getTopicKeyByID(id);
   if (!topicKey) {
      return;
    }
    let topicKeyInt = parseInt(topicKey);
    this.topics.splice(topicKeyInt, 1);
 }

addTopic(topic){
  this.topics.push(topic);
  return this.getTopicById(topic.id);
}

getTopicById(id){
  return this.topics[this.getTopicKeyByID(id)];
}

getAllTopics(){
  return this.topics;
}

generateTopicData(){
  let newTopic = new Object();
  newTopic['id'] = 0;
  newTopic["topicName"] = "Schach";
  this.addTopic(newTopic);
}

}
