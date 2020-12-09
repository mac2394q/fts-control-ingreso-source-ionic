import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescensoPageRoutingModule } from './descenso-routing.module';

import { DescensoPage } from './descenso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescensoPageRoutingModule
  ],
  declarations: [DescensoPage]
})
export class DescensoPageModule {}
