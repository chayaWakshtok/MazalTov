import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { MuamadRegisterComponent } from './muamad-register/muamad-register.component';
import { UserRoutingModule } from './user.routing.module';



@NgModule({
  declarations: [
    UserComponent,
    MuamadRegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
