import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { AddRavComponent } from './add-rav/add-rav.component';
import { RavHomeComponent } from './rav-home/rav-home.component';
const routes: Routes = [
    {
        path: "",
        component: RavHomeComponent,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.Secretary
        }
    },
    {
        path: "new",
        component: AddRavComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RavRoutingModule { }
