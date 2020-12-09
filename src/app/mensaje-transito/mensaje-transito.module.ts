import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeTransitoPageRoutingModule } from './mensaje-transito-routing.module';

import { MensajeTransitoPage } from './mensaje-transito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeTransitoPageRoutingModule
  ],
  declarations: [MensajeTransitoPage]
})
export class MensajeTransitoPageModule {}
