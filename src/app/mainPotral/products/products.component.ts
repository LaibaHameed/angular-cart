import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessengerServiceService } from 'src/app/sharedPotral/services/messenger-service.service';
import { NonVolatileServiceService } from 'src/app/sharedPotral/services/non-volatile-service.service';
import { DataServiceService } from '../../sharedPotral/services/data-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ServiceData: any = []; // step5

  constructor(
    private _DataService: DataServiceService, // step4
    private _Router: Router, // step 9
    private _MessengerService: MessengerServiceService, // step 18
    private _NonVolatileServeice: NonVolatileServiceService // step 35
  ) {
    this.GetDataFromService(); // step7
  }

  ngOnInit(): void {
  }

  GetDataFromService() {  // step6
    this.ServiceData = this._DataService.getJsonData();
    // console.log(this.ServiceData);

  }

  GoToCartPage(id: any) { // step 11
    this._Router.navigate(['cart']); // step 12
    this._MessengerService.SendDataFromProduct(id); // step 19
    this._NonVolatileServeice.SetDataToLocalStorage(id); // step 36
  }
}


// function _id(_id: any) {
//   throw new Error('Function not implemented.');
// }

