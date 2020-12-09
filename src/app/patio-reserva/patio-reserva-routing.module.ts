import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatioReservaPage } from './patio-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: PatioReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatioReservaPageRoutingModule {}
