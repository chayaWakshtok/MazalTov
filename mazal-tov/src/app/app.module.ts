import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './shared/auth/auth-interceptor.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { UserComponent } from './component/users/user/user.component';
import { SecretaryModule } from './component/secretary/secretary.module';
import { MatchMarkerModule } from './component/matchmarkers/matchmarker.module';
import { WorkerModule } from './component/workers/worker.module';
import { UserModule } from './component/users/user.module';
import { AdminModule } from './component/admin/admin.module';
import { AddWorkerComponent } from './component/workers/add-worker/add-worker.component';
import { TreatmentConsultantComponent } from './component/workers/treatment-consultant/treatment-consultant.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TreatmentConsultantComponent,

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
