import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
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
        path: "new",
        component: AddSecretaryComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecretaryRoutingModule { }
