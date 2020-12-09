import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosVehiculoPageRoutingModule } from './datos-vehiculo-routing.module';

import { DatosVehiculoPage } from './datos-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosVehiculoPageRoutingModule
  ],
  declarations: [DatosVehiculoPage]
})
export class DatosVehiculoPageModule {}
