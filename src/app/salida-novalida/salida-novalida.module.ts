import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalidaNovalidaPageRoutingModule } from './salida-novalida-routing.module';

import { SalidaNovalidaPage } from './salida-novalida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalidaNovalidaPageRoutingModule
  ],
  declarations: [SalidaNovalidaPage]
})
export class SalidaNovalidaPageModule {}
