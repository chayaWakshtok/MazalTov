import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: "",
        component: UserComponent,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.User
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
