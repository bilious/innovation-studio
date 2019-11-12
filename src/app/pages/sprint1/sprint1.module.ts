import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { Sprint1Component } from './sprint1.component';
import { StageComponentsModule } from './../../components/stage/stage-component.module';

@NgModule({
  imports: [
    StageComponentsModule
  ],
  declarations: [
    Sprint1Component
  ],
  exports: [
    Sprint1Component
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class Sprint1Module { }