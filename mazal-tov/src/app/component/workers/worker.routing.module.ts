import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { WorkerHomeComponent } from './worker-home/worker-home.component';

const routes: Routes = [
  {
    path: "",
    component: WorkerHomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: RoleEnum.Worker
    }
  },
  {
    path: "new",
    component: AddWorkerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
