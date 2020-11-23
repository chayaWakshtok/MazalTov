import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { ShadchanitRegisterComponent } from './component/shadchanit-register/shadchanit-register.component';
 
import { FormsModule } from '@angular/forms';
import { MuamadRegisterComponent } from './component/muamad-register/muamad-register.component';
import { HomeComponent } from './component/home/home.component';
import { authInterceptorProviders } from './shared/auth/auth-interceptor.service';
import { LoginComponent } from './component/login/login.component';
// import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WorkerComponent } from './component/worker/worker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    // HttpModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
