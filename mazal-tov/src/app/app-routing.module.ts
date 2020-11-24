import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { MatchmarkerHomeComponent } from './component/matchmarkers/matchmarker-home/matchmarker-home.component';
import { SecretaryHomeComponent } from './component/secretary/secretary-home/secretary-home.component';
import { UserComponent } from './component/users/user/user.component';
import { WorkerHomeComponent } from './component/workers/worker-home/worker-home.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminHomeComponent },
  { path: "matchmarker", component: MatchmarkerHomeComponent },
  { path: "worker", component: WorkerHomeComponent },
  { path: "user", component: UserComponent },
  { path: "secretary", component: SecretaryHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
