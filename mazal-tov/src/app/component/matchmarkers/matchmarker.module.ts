import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { SecretaryHomeComponent } from '../secretary/secretary-home/secretary-home.component';
import { AddWorkerComponent } from '../workers/add-worker/add-worker.component';
import { WorkerHomeComponent } from '../workers/worker-home/worker-home.component';
import { MatchmarkerHomeComponent } from './matchmarker-home/matchmarker-home.component';
import { UserComponent } from '../users/user/user.component';
import { FormsModule } from '@angular/forms';
import { WorkerModule } from '../workers/worker.module';
import { MatchMarkerRoutingModule } from './matchmarker.routing.module';
import { MatchmarkerRegisterComponent } from './matchmarker-register/matchmarker-register.component';
import { ShowErrorsComponent } from 'src/app/shared/components/show-errors/show-errors.component';
import { RegisterMessageComponent } from './register-message/register-message.component';
import { MainComponent } from './work/main/main.component';
import { Step1Component } from './work/step1/step1.component';
import { CanCardComponent } from './work/step1/can-card/can-card.component';
import { Step2Component } from './work/step2/step2.component';
import { Step3Component } from './work/step3/step3.component';
import { Step4Component } from './work/step4/step4.component';
import { Step5Component } from './work/step5/step5.component';
import { Step6Component } from './work/step6/step6.component';

@NgModule({
  declarations: [
    MatchmarkerHomeComponent,
    MatchmarkerRegisterComponent,
    ShowErrorsComponent,
    RegisterMessageComponent,
    MainComponent,
    Step1Component,
    CanCardComponent,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatchMarkerRoutingModule
  ],
  entryComponents: [
    RegisterMessageComponent
  ],
})
export class MatchMarkerModule { }
