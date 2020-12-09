import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatioReservaPageRoutingModule } from './patio-reserva-routing.module';

import { PatioReservaPage } from './patio-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatioReservaPageRoutingModule
  ],
  declarations: [PatioReservaPage]
})
export class PatioReservaPageModule {}
