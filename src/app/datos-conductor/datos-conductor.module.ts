import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosConductorPageRoutingModule } from './datos-conductor-routing.module';

import { DatosConductorPage } from './datos-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosConductorPageRoutingModule
  ],
  declarations: [DatosConductorPage]
})
export class DatosConductorPageModule {}
