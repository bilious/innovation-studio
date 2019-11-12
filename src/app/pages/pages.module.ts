import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { Sprint1Module } from './sprint1/sprint1.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    FormsModule,
    CommonModule,
    Sprint1Module
  ],
  declarations: [
    PagesComponent,
  ],
  exports: [
  ]
})
export class PagesModule {
}
