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


@NgModule({
  declarations: [
    AdminHomeComponent,
    BoxMainComponent,
    ClassificationComponent,
    HalachotsComponent,
    AddHalachaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    AngularEditorModule
  ]
})
export class AdminModule { }
