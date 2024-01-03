import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing.module';
import { BoxMainComponent } from 'src/app/shared/components/box-main/box-main.component';
import { ClassificationComponent } from './classification/classification.component';
import { HalachotsComponent } from './halachots/halachots.component';
import { AddHalachaComponent } from './halachots/add-halacha/add-halacha.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ContactusListComponent } from './contactus-list/contactus-list.component';
import { ShowUserComponent } from './classification/show-user/show-user.component';
import { EditUserComponent } from './classification/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    BoxMainComponent,
    ClassificationComponent,
    HalachotsComponent,
    AddHalachaComponent,
    ContactusListComponent,
    ShowUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    AngularEditorModule
  ],
  exports:[
    ContactusListComponent,
    ClassificationComponent,
    HalachotsComponent,
    AddHalachaComponent,
    BoxMainComponent,
    ShowUserComponent,
    EditUserComponent
  ]
})
export class AdminModule { }
