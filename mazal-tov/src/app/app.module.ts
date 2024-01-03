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
import { RavModule } from './component/ravs/rav.module';

import { MatchMarkerModule } from './component/matchmarkers/matchmarker.module';
import { WorkerModule } from './component/workers/worker.module';
import { UserModule } from './component/users/user.module';
import { AdminModule } from './component/admin/admin.module';
import { AddWorkerComponent } from './component/workers/add-worker/add-worker.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { ShowErrorsComponent } from './shared/components/show-errors/show-errors.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MessageOkComponent } from './shared/components/contact-us/message-ok/message-ok.component';
import { BoxMainComponent } from './shared/components/box-main/box-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    ContactUsComponent,
    MessageOkComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AngularEditorModule

  ],
  providers: [authInterceptorProviders],
  entryComponents: [
    MessageOkComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
