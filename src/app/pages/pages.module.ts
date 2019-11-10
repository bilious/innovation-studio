import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { WorkitemListModule } from './workitem-list/workitem-list.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    FormsModule,
    CommonModule,
    WorkitemListModule
  ],
  declarations: [
    PagesComponent,
  ],
  exports: [
  ]
})
export class PagesModule {
}
