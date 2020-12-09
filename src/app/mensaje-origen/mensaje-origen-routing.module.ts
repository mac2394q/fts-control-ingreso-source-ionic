import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeOrigenPage } from './mensaje-origen.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeOrigenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeOrigenPageRoutingModule {}
