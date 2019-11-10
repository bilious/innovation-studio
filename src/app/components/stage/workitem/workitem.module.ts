import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { WorkitemComponent } from './workitem.component';


@NgModule({
  imports: [
    MatCheckboxModule,
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