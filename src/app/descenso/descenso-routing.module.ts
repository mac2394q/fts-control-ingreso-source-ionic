import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescensoPage } from './descenso.page';

const routes: Routes = [
  {
    path: '',
    component: DescensoPage
  },
  {
    path: 'descenso',
    loadChildren: () => import('./descenso/descenso.module').then( m => m.DescensoPageModule)
  },
  {
    path: 'descenso-origen',
    loadChildren: () => import('./descenso-origen/descenso-origen.module').then( m => m.DescensoOrigenPageModule)
  },
  {
    path: 'descenso-patio',
    loadChildren: () => import('./descenso-patio/descenso-patio.module').then( m => m.DescensoPatioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescensoPageRoutingModule {}
