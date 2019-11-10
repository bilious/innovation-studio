import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { WorkitemListComponent } from './workitem-list/workitem-list.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  {
    path: 'workitems',
    component: WorkitemListComponent,
  },
  {
    path: '',
    redirectTo: 'workitems',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'workitems'
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
