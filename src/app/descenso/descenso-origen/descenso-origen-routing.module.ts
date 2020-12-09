import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescensoOrigenPage } from './descenso-origen.page';

const routes: Routes = [
  {
    path: '',
    component: DescensoOrigenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescensoOrigenPageRoutingModule {}
