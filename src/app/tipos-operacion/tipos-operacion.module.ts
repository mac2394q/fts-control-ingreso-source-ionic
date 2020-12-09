import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposOperacionPageRoutingModule } from './tipos-operacion-routing.module';

import { TiposOperacionPage } from './tipos-operacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposOperacionPageRoutingModule
  ],
  declarations: [TiposOperacionPage]
})
export class TiposOperacionPageModule {}
