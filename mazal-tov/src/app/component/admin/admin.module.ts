import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing.module';



@NgModule({
  declarations: [
    AdminHomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
