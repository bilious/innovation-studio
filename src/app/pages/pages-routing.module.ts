import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { Sprint1Component } from './sprint1/sprint1.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  {
    path: 'workitems',
    component: Sprint1Component,
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
