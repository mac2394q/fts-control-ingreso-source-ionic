import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposOperacionPage } from './tipos-operacion.page';

const routes: Routes = [
  {
    path: '',
    component: TiposOperacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposOperacionPageRoutingModule {}
