import { NgModule } from '@angular/core';
import { WorkitemModule } from './workitem/workitem.module';

const components = [
];

@NgModule({
  imports: [
    WorkitemModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    WorkitemModule
  ]
})
export class StageComponentsModule { }
