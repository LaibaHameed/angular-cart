import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs'; //? important

@Injectable({
  providedIn: 'root'
})
export class MessengerServiceService {

  subject = new ReplaySubject(1); // step 13

  constructor() { }

  SendDataFromProduct(cart: boolean) { // step 14
    this.subject.next(cart); // step 15
  }

  GetDataFromProduct() {  // step 16
    return this.subject.asObservable(); // step 17
  }
}
