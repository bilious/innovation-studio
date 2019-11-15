import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { Sprint1Component } from './sprint1.component';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    ComponentsModule
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