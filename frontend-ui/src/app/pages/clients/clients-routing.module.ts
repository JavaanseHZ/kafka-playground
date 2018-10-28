import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients.component';
import { ClientTableComponent } from './client-table/client-table.component';

const routes: Routes = [{
  path: '',
  component: ClientsComponent,
  children: [{
    path: 'client-table',
    component: ClientTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule { }

export const routedComponents = [
  ClientsComponent,
  ClientTableComponent,
];
