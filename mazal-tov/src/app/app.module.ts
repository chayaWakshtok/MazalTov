import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { ShadchanitRegisterComponent } from './component/shadchanit-register/shadchanit-register.component';
 
import { FormsModule } from '@angular/forms';
import { MuamadRegisterComponent } from './component/muamad-register/muamad-register.component';
import { HomeComponent } from './component/home/home.component';
 

@NgModule({
 
     
  declarations: [
    AppComponent,
    UserComponent,
    ShadchanitRegisterComponent,
    MuamadRegisterComponent,
    HomeComponent
  ],
  imports: [
    FormsModule  ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
