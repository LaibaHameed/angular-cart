import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mainPotral/header/header.component';
import { HomeComponent } from './mainPotral/home/home.component';
import { ProductsComponent } from './mainPotral/products/products.component';
import { CartComponent } from './mainPotral/cart/cart.component';
import { DashboardComponent } from './ManagmentPotral/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
