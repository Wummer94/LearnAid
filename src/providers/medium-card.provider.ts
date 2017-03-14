import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MediumCard provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MediumCard {

  public mediumThemes = new Array();

  constructor(public http: Http) {
    this.generateMediumThemeData(); 
  }
  
  getAllMediumThemes(){
  return this.mediumThemes;
}

addMediumTheme(theme){
 this.mediumThemes.push(theme);
 return this.getMediumThemaById(theme.id);
}

getMediumThemaById(id){
  return this.mediumThemes[this.getMediumThemeKeyByID(id)];
}

getMediumThemeKeyByID(id){
   for (let key in this.mediumThemes) {
      if (this.mediumThemes[key].id == id) {
        return key;
      }
   }
}

updateMediumTheme(themeUpdate){
  let themeKey = this.getMediumThemeKeyByID(themeUpdate.id);
  this.mediumThemes[themeKey] = themeUpdate;
  return this.mediumThemes[themeKey];
}

deleteMediumTheme(id) {
    let themeKey = this.getMediumThemeKeyByID(id);
    if (!themeKey) {
      return;
    }
    let themeKeyInt = parseInt(themeKey);
    this.mediumThemes.splice(themeKeyInt, 1);
  }

generateMediumThemeData(){
  let mediumThemes = new Object();
 
}

}
