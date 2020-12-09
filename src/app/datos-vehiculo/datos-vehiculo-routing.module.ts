import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosVehiculoPage } from './datos-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: DatosVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosVehiculoPageRoutingModule {}
