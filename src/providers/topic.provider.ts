import { Injectable } from '@angular/core';
import { ConnectionProvider } from './connection.provider';

/*
  Generated class for the Topic provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Topic {

  public topics = new Array();

  constructor(public connection: ConnectionProvider) {
   // this.loadTopicsFromAPI();
    this.generateTopicData();
  }

  getTopicKeyByID(id){
    for (let key in this.topics) {
      if (this.topics[key].id_topic == id) {
        return key;
      }
    }
 }

  loadTopicsFromAPI() {
 //  var asd = this;
 //   this.connection.getReqeuest('/api/v1/topics', function (results) {
 //     asd.topics = Object.assign(asd.topics,results);
 //     console.log(asd.topics);
 //   });
  }


  addTopicToApi(topics) {
  //  var h = this;
  //  return this.connection.postReqeuest('/api/v1/topic', topics, function (results) {
  //    if (results.errorCode == null) {
  //      h.loadTopicsFromAPI();
  //      return this.getTopicById(topics.id);
  //    }
  //  });
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
