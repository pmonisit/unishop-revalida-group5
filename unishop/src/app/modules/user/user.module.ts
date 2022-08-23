import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { UserRoutingModule } from './user-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [
  
    DashboardComponent,
    MyCartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
