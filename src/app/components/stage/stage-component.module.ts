import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkitemListModule } from './workitem-list/workitem-list.module';

const components = [
];

@NgModule({
  imports: [
    WorkitemListModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    WorkitemListModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class StageComponentsModule { }
