import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { WorkitemListComponent } from './workitem-list.component';
import { WorkitemModule } from './../workitem/workitem.module';

@NgModule({
  imports: [
    CommonModule,
    WorkitemModule,
  ],
  declarations: [
    WorkitemListComponent
  ],
  exports: [
    WorkitemListComponent
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class WorkitemListModule { }