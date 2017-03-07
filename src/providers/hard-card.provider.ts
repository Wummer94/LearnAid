import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HardCard provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HardCard {

  public hardThemes = new Array()

  constructor(public http: Http) {
    this .generateHardThemeData();
  }

  getAllHardThemes(){
  return this.hardThemes;
}

addHardTheme(theme){
 this.hardThemes.push(theme);
 return this.getHardThemaById(theme.id);
}

getHardThemaById(id){
  return this.hardThemes[this.getHardThemeKeyByID(id)];
}

getHardThemeKeyByID(id){
   for (let key in this.hardThemes) {
      if (this.hardThemes[key].id == id) {
        return key;
      }
   }
}

updateHardTheme(themeUpdate){
  let themeKey = this.getHardThemeKeyByID(themeUpdate.id);
  this.hardThemes[themeKey] = themeUpdate;
  return this.hardThemes[themeKey];
}

deleteHardTheme(id) {
    let themeKey = this.getHardThemeKeyByID(id);
    if (!themeKey) {
      return;
    }
    let themeKeyInt = parseInt(themeKey);
    this.hardThemes.splice(themeKeyInt, 1);
  }

generateHardThemeData(){
  let hardThemes = new Object();
  hardThemes['id']=0;
  hardThemes['hardThemeQuestion'] = "How much is a King worth ?";
  hardThemes['hardThemeAnswer'] = "Queens value is nine Pawns";
  this.addHardTheme(hardThemes);
}

}
