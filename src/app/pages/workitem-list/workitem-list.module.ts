import { NgModule } from '@angular/core';

import { WorkitemListComponent } from './workitem-list.component';
import { StageComponentsModule } from './../../components/stage/stage-component.module';

@NgModule({
  imports: [
    StageComponentsModule
  ],
  declarations: [
    WorkitemListComponent
  ],
  exports: [
    WorkitemListComponent
  ]
})
export class WorkitemListModule { }