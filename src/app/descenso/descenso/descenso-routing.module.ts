import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescensoPage } from './descenso.page';

const routes: Routes = [
  {
    path: '',
    component: DescensoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescensoPageRoutingModule {}
