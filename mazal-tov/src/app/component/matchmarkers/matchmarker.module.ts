import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { SecretaryHomeComponent } from '../secretary/secretary-home/secretary-home.component';
import { AddWorkerComponent } from '../workers/add-worker/add-worker.component';
import { WorkerHomeComponent } from '../workers/worker-home/worker-home.component';
import { MatchmarkerHomeComponent } from './matchmarker-home/matchmarker-home.component';
import { MuamadRegisterComponent } from '../users/muamad-register/muamad-register.component';
import { UserComponent } from '../users/user/user.component';
import { ShadchanitRegisterComponent } from './shadchanit-register/shadchanit-register.component';
import { FormsModule } from '@angular/forms';
import { WorkerModule } from '../workers/worker.module';
import { MatchMarkerRoutingModule } from './matchmarker.routing.module';



@NgModule({
  declarations: [
    MatchmarkerHomeComponent,
    ShadchanitRegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WorkerModule,
    MatchMarkerRoutingModule
  ]
})
export class MatchMarkerModule { }
