import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/sharedPotral/services/data-service.service';
import { MessengerServiceService } from 'src/app/sharedPotral/services/messenger-service.service';
import { NonVolatileServiceService } from 'src/app/sharedPotral/services/non-volatile-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  OnclickData: any; //step 22
  DataServiceData: any = []; // step 26
  FilterData: any = []; // step 27

  constructor(
    private _MessengerService: MessengerServiceService, // step 20
    private _DataService: DataServiceService, //step 25
    private _NonVolatileServeice: NonVolatileServiceService, // step 32
  ) {}


  ngOnInit(): void {
    this.GetData(); //step 24
    this.GetAllObjectFromDataService(); // step 41

  }


  GetData() { // step 21
    this._MessengerService.GetDataFromProduct().subscribe((DataFromMessenger: any) => { // step 23
      this.OnclickData = DataFromMessenger;
      console.log(this.OnclickData);
    });
  }


  GetAllObjectFromDataService() { // step 28
    this.DataServiceData = this._DataService.getJsonData(); // step 29
    // this.FilterData = this.DataServiceData.filter((Result:any)=>{  // step 39
    //   return (Result._id === this.OnclickData)
    // })
    // console.log(this.FilterData);// step 40

    if (this.OnclickData === undefined) {  // step 31
      const localStorageData = this._NonVolatileServeice.GetProductToLocalStorage(); // step 33
      this.FilterData = this.DataServiceData.filter((Result: any) => { // step 34
        return (Result._id === localStorageData);
      })
      console.log(this.FilterData);
      return
    }

    this.FilterData = this.DataServiceData.filter((Result: any) => { // step 37
      return (Result._id === this.OnclickData);
    })

    console.log(this.FilterData); // step 38
  }
}
