import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecretaryHomeComponent } from './secretary-home/secretary-home.component';
import { FormsModule } from '@angular/forms';
import { SecretaryRoutingModule } from './secretary.routing.module';
import { AddSecretaryComponent } from './add-secretary/add-secretary.component';
import { ContactusListComponent } from '../admin/contactus-list/contactus-list.component';
import { BoxMainComponent } from 'src/app/shared/components/box-main/box-main.component';
import { AdminModule } from '../admin/admin.module';



@NgModule({
  declarations: [
    SecretaryHomeComponent,
    AddSecretaryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SecretaryRoutingModule,
    AdminModule
  ],
  exports: [
    SecretaryHomeComponent,
    AddSecretaryComponent,
  ]
})
export class SecretaryModule { }
