import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user.routing.module';
import { CandidateRegisterComponent } from './candidate-register/candidate-register.component';
import { LawComponent } from './law/law.component';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
import { RegisterMessageComponent } from './register-message/register-message.component';



@NgModule({
  declarations: [
    UserComponent,
    CandidateRegisterComponent,
    LawComponent,
    CandidateInfoComponent,
    RegisterMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  entryComponents:[
    RegisterMessageComponent
  ]
})
export class UserModule { }
