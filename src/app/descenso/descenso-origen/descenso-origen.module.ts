import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescensoOrigenPageRoutingModule } from './descenso-origen-routing.module';

import { DescensoOrigenPage } from './descenso-origen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescensoOrigenPageRoutingModule
  ],
  declarations: [DescensoOrigenPage]
})
export class DescensoOrigenPageModule {}
