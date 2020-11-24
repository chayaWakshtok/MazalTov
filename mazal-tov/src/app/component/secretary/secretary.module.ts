import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretaryHomeComponent } from './secretary-home/secretary-home.component';
import { FormsModule } from '@angular/forms';
import { SecretaryRoutingModule } from './secretary.routing.module';



@NgModule({
  declarations: [
    SecretaryHomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SecretaryRoutingModule
  ]
})
export class SecretaryModule { }
