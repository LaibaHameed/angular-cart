import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartElementComponent } from './mainPotral/cart-element/cart-element.component';
import { CartComponent } from './mainPotral/cart/cart.component';
import { HomeComponent } from './mainPotral/home/home.component';
import { ProductsComponent } from './mainPotral/products/products.component';
import { DashboardComponent } from './ManagmentPotral/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'cart-element', component:CartElementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
