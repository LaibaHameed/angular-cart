import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatileServiceService {

  constructor() { }

  SetDataToLocalStorage(id: any) { // step 29
    localStorage.setItem('Product-id', JSON.stringify(id))
  }

  GetProductToLocalStorage() { // step 30 agr Product ki jaga hm DAta likhy gy toh zayada self explaintory ho ga
    return JSON.parse(localStorage.getItem('Product-id') || '{}');
  }

// step 55 == cart Quantity Section
addProductToLocalStorage(Data:any){
  localStorage.setItem('UserCart', JSON.stringify(Data));
}

GetSaveProductToLocalStorage() { // step 56
  return JSON.parse(localStorage.getItem('UserCart') || '{}');
}

}
