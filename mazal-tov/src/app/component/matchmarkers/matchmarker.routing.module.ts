import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleEnum } from 'src/app/classes/role';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { MatchmarkerHomeComponent } from './matchmarker-home/matchmarker-home.component';
import { MatchmarkerRegisterComponent } from './matchmarker-register/matchmarker-register.component';
import { RegisterMessageComponent } from './register-message/register-message.component';
import { MainComponent } from './work/main/main.component';
import { Step1Component } from './work/step1/step1.component';
import { Step2Component } from './work/step2/step2.component';
import { Step3Component } from './work/step3/step3.component';
import { Step4Component } from './work/step4/step4.component';
import { Step5Component } from './work/step5/step5.component';
import { Step6Component } from './work/step6/step6.component';

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
        path: "main",
        component: MainComponent,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.MatchMarker
        }
    },
    {
        path: "step1",
        component: Step1Component,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.MatchMarker
        }
    },
    {
        path: "step1/:id",
        component: Step1Component,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.MatchMarker
        }
    },
    {
        path: "step2/:id",
        component: Step2Component,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.MatchMarker
        }
    },
    {
        path: "step3/:id",
        component: Step3Component,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.MatchMarker
        }
    },
    {
        path: "step4/:id",
        component: Step4Component,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.MatchMarker
        }
    },
    {
        path: "step5/:id",
        component: Step5Component,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.MatchMarker
        }
    },
    {
        path: "step6/:id",
        component: Step6Component,
        canActivate: [AuthGuard],
        data: {
            role: RoleEnum.MatchMarker
        }
    },
    {
        path: "new",
        component: MatchmarkerRegisterComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatchMarkerRoutingModule { }
