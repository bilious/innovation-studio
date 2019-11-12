import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { WorkitemListComponent } from './workitem-list.component';
import { WorkitemModule } from './../workitem/workitem.module';

@NgModule({
  imports: [
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