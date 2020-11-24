import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
    {
        path: "",
        component: AdminHomeComponent,
        canActivate: [AuthGuard],
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
