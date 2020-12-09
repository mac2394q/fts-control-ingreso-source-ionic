import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeTransitoPage } from './mensaje-transito.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeTransitoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeTransitoPageRoutingModule {}
