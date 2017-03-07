import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Pages
import { TopicPage } from '../topic/topic';

//Providers
import {Account} from '../../providers/account.provider';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public admins;
  public userName;
  public password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public Account:Account) {
    this.admins = Account.getAllAdmins();
    console.log(this.admins);
  }

    login( userName:string, password:string){
    if(userName === this.admins.name && password === this.admins.password){
      this.navCtrl.setRoot(TopicPage, this.admins.id);
    }
  }

}
