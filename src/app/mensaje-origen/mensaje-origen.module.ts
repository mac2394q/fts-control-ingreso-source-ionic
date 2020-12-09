import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeOrigenPageRoutingModule } from './mensaje-origen-routing.module';

import { MensajeOrigenPage } from './mensaje-origen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeOrigenPageRoutingModule
  ],
  declarations: [MensajeOrigenPage]
})
export class MensajeOrigenPageModule {}
