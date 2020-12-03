import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user.routing.module';
import { CandidateRegisterComponent } from './candidate-register/candidate-register.component';
import { LawComponent } from './law/law.component';



@NgModule({
  declarations: [
    UserComponent,
    CandidateRegisterComponent,
    LawComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
