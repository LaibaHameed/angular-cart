import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatileServiceService {

  constructor() { }

  SetDataToLocalStorage(id: any) { // step 29
    localStorage.setItem('Product-id', JSON.stringify(id))
  }

  GetProductToLocalStorage() { // step 30
    return JSON.parse(localStorage.getItem('Product-id') || '{}');
  }
}

