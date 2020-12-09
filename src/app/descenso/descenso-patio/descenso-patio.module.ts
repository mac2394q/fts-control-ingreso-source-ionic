import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescensoPatioPageRoutingModule } from './descenso-patio-routing.module';

import { DescensoPatioPage } from './descenso-patio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescensoPatioPageRoutingModule
  ],
  declarations: [DescensoPatioPage]
})
export class DescensoPatioPageModule {}
