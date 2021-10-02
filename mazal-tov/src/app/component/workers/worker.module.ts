import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { WorkerHomeComponent } from './worker-home/worker-home.component';
import { FormsModule } from '@angular/forms';
import { WorkerRoutingModule } from './worker.routing.module';



@NgModule({
  declarations: [
    WorkerHomeComponent,
    AddWorkerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WorkerRoutingModule
  ],
  exports: [
    WorkerHomeComponent,
    AddWorkerComponent
  ]
})
export class WorkerModule { }
