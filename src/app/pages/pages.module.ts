import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule} from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../components/components.module';

// components
import { PagesComponent } from './pages.component';
import { Sprint1Module } from './sprint1/sprint1.module';
import { Sprint1Component } from './sprint1/sprint1.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    PagesRoutingModule,
    FormsModule,
    CommonModule,
    ComponentsModule,
    // Sprint1Module
    MatButtonModule
  ],
  declarations: [
    PagesComponent,
    Sprint1Component
  ],
  exports: [
    ComponentsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule {
}
