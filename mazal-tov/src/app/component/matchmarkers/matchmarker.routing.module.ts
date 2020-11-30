import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { MatchmarkerHomeComponent } from './matchmarker-home/matchmarker-home.component';
import { MatchmarkerRegisterComponent } from './matchmarker-register/matchmarker-register.component';

const routes: Routes = [
    {
        path: "",
        component: MatchmarkerHomeComponent,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.MatchMarker
        }
    },
    {
        path: "new",
        component: MatchmarkerRegisterComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatchMarkerRoutingModule { }
