import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Account provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Account {

  public admin = new Array();

  constructor(public http: Http) {
    this.generateAdminData();  
  }

  getAdminByID(id) {
    for (let key in this.admin) {
      if (this.admin[key]['id'] == id) {
        return this.admin[key];
      }
    }
  }   

getAllAdmins(){
  return this.admin;
}

generateAdminData(){
  this.admin["id"]=0;
  this.admin["name"]="Admin";
  this.admin["password"]="123";
 }

}
