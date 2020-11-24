import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './shared/auth/auth-interceptor.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ShadchanitRegisterComponent } from './component/matchmarkers/shadchanit-register/shadchanit-register.component';
import { MuamadRegisterComponent } from './component/users/muamad-register/muamad-register.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { MatchmarkerHomeComponent } from './component/matchmarkers/matchmarker-home/matchmarker-home.component';
import { WorkerHomeComponent } from './component/workers/worker-home/worker-home.component';
import { SecretaryHomeComponent } from './component/secretary/secretary-home/secretary-home.component';
import { UserComponent } from './component/users/user/user.component';
import { AddWorkerComponent } from './component/workers/add-worker/add-worker.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShadchanitRegisterComponent,
    MuamadRegisterComponent,
    HomeComponent,
    LoginComponent,
    AddWorkerComponent,
    AdminHomeComponent,
    MatchmarkerHomeComponent,
    WorkerHomeComponent,
    SecretaryHomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
