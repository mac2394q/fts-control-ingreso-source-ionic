import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosConductorPage } from './datos-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: DatosConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosConductorPageRoutingModule {}
