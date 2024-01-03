import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { ClassificationComponent } from '../admin/classification/classification.component';
import { ContactusListComponent } from '../admin/contactus-list/contactus-list.component';
import { HalachotsComponent } from '../admin/halachots/halachots.component';
import { AddSecretaryComponent } from './add-secretary/add-secretary.component';
import { SecretaryHomeComponent } from './secretary-home/secretary-home.component';

const routes: Routes = [
    {
        path: "",
        component: SecretaryHomeComponent,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.Secretary
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
        path: "new",
        component: AddSecretaryComponent,
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecretaryRoutingModule { }
