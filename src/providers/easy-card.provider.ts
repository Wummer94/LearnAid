import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EasyCard provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EasyCard {

public easyThemes = new Array();

  constructor(public http: Http) {
    this.generateEasyThemeData(); 
  }

  getAllEasyThemes(){
  return this.easyThemes;
}

addEasyTheme(theme){
 this.easyThemes.push(theme);
 return this.getEasyThemaById(theme.id);
}

getEasyThemaById(id){
  return this.easyThemes[this.getEasyThemeKeyByID(id)];
}

getEasyThemeKeyByID(id){
   for (let key in this.easyThemes) {
      if (this.easyThemes[key].id == id) {
        return key;
      }
   }
}

updateEasyTheme(themeUpdate){
  let themeKey = this.getEasyThemeKeyByID(themeUpdate.id);
  this.easyThemes[themeKey] = themeUpdate;
  return this.easyThemes[themeKey];
}

deleteEasyThemes(id) {
    let themeKey = this.getEasyThemeKeyByID(id);
    if (!themeKey) {
      return;
    }
    let themeKeyInt = parseInt(themeKey);
    this.easyThemes.splice(themeKeyInt, 1);
  }

generateEasyThemeData(){
  let newEasyTheme = new Object();
  newEasyTheme['id']=0;
  newEasyTheme['easyThemeQuestion'] = "How much is a queen worth ?";
  newEasyTheme['easyThemeAnswer'] = "Queens value is nine Pawns";
  this.addEasyTheme(newEasyTheme);
}

}
