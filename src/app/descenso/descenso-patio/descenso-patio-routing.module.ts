import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescensoPatioPage } from './descenso-patio.page';

const routes: Routes = [
  {
    path: '',
    component: DescensoPatioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescensoPatioPageRoutingModule {}
