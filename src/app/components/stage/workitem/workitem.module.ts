import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatCardModule, MatButtonModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { WorkitemComponent } from './workitem.component';


@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatCardModule, MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    CKEditorModule,
  ],
  declarations: [
    WorkitemComponent
  ],
  exports: [
    WorkitemComponent,
    MatCheckboxModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WorkitemModule { }