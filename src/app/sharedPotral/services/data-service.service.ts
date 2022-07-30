import { Injectable } from '@angular/core';
import jsonData from '../JSONData/user.json' // step1

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  DataJson = jsonData;   // step2

 
  getJsonData(){  // step3
    return this.DataJson;
  }

  constructor() { }
}
