import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminModule } from './component/admin/admin.module';
import { MatchmarkerHomeComponent } from './component/matchmarkers/matchmarker-home/matchmarker-home.component';
import { MatchMarkerModule } from './component/matchmarkers/matchmarker.module';
import { SecretaryHomeComponent } from './component/secretary/secretary-home/secretary-home.component';
import { SecretaryRoutingModule } from './component/secretary/secretary.routing.module';
import { UserModule } from './component/users/user.module';
import { UserComponent } from './component/users/user/user.component';
import { WorkerHomeComponent } from './component/workers/worker-home/worker-home.component';
import { WorkerModule } from './component/workers/worker.module';
import { AuthGuard } from './shared/auth/auth.guard';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';

const routes: Routes = [
 {
    path: "",
    component: HomeComponent,
    
  }, 
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "admin",
    loadChildren: () => AdminModule,
  },
  {
    path: "matchmarker",
    loadChildren: () => MatchMarkerModule,
  },
  {
    path: "worker",
    loadChildren: () => WorkerModule,
  },
  {
    path: "user",
    loadChildren: () => UserModule,
  },
  {
    path: "secretary",
    loadChildren: () => SecretaryRoutingModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
