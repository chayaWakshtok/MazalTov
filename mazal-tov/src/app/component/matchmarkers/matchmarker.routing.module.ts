import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { MatchmarkerHomeComponent } from './matchmarker-home/matchmarker-home.component';

const routes: Routes = [
    {
        path: "",
        component: MatchmarkerHomeComponent,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.MatchMarker
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatchMarkerRoutingModule { }
