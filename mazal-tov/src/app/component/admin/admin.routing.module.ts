import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ClassificationComponent } from './classification/classification.component'
import { HalachotsComponent } from './halachots/halachots.component';
import { AddHalachaComponent } from './halachots/add-halacha/add-halacha.component';
import { ContactusListComponent } from './contactus-list/contactus-list.component';

const routes: Routes = [
  {
    path: "",
    component: AdminHomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: RoleEnum.Admin
    }
  },
  {
    path: "classification",
    component: ClassificationComponent,
    data: {
      role: RoleEnum.Admin
    }
  },
  {
    path: "halachots",
    component: HalachotsComponent,
    data: {
      role: RoleEnum.Admin
    }
  },
  {
    path: "contactus",
    component: ContactusListComponent,
    data: {
      role: RoleEnum.Admin
    }
  },
  {
    path: "add-halacha",
    component: AddHalachaComponent,
    data: {
      role: RoleEnum.Admin
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
