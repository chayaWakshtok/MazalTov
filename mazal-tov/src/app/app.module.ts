import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './shared/auth/auth-interceptor.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserComponent } from './component/users/user/user.component copy';
import { ShadchanitRegisterComponent } from './component/matchmarkers/shadchanit-register/shadchanit-register.component';
import { MuamadRegisterComponent } from './component/users/muamad-register/muamad-register.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { WorkerComponent } from './component/workers/worker/worker.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ShadchanitRegisterComponent,
    MuamadRegisterComponent,
    HomeComponent,
    LoginComponent,
    WorkerComponent
  ],
  imports: [
    FormsModule  ,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
