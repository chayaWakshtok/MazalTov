import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RavHomeComponent } from './rav-home/rav-home.component';
import { AddRavComponent } from './add-rav/add-rav.component';
import { RavRoutingModule } from './rav.routing.module';



@NgModule({
  declarations: [
    RavHomeComponent,
    AddRavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RavRoutingModule
  ],
  exports: [
    RavHomeComponent,
    AddRavComponent
  ]
})
export class RavModule { }
