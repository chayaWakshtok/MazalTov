import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretaryHomeComponent } from './secretary-home/secretary-home.component';
import { FormsModule } from '@angular/forms';
import { SecretaryRoutingModule } from './secretary.routing.module';
import { AddSecretaryComponent } from './add-secretary/add-secretary.component';



@NgModule({
  declarations: [
    SecretaryHomeComponent,
    AddSecretaryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SecretaryRoutingModule
  ],
  exports: [
    SecretaryHomeComponent,
    AddSecretaryComponent,
  ]
})
export class SecretaryModule { }
