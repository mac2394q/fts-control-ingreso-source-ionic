import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'datos-vehiculo',
    pathMatch: 'full'
  },
  {
    path: 'datos-vehiculo',
    loadChildren: () => import('./datos-vehiculo/datos-vehiculo.module').then( m => m.DatosVehiculoPageModule)
  },
  {
    path: 'datos-conductor',
    loadChildren: () => import('./datos-conductor/datos-conductor.module').then( m => m.DatosConductorPageModule)
  },
  {
    path: 'salida-novalida',
    loadChildren: () => import('./salida-novalida/salida-novalida.module').then( m => m.SalidaNovalidaPageModule)
  },
  {
    path: 'tipos-operacion',
    loadChildren: () => import('./tipos-operacion/tipos-operacion.module').then( m => m.TiposOperacionPageModule)
  },
  {
    path: 'origen',
    loadChildren: () => import('./origen/origen.module').then( m => m.OrigenPageModule)
  },
  {
    path: 'mensaje-origen',
    loadChildren: () => import('./mensaje-origen/mensaje-origen.module').then( m => m.MensajeOrigenPageModule)
  },
  {
    path: 'transito',
    loadChildren: () => import('./transito/transito.module').then( m => m.TransitoPageModule)
  },
  {
    path: 'mensaje-transito',
    loadChildren: () => import('./mensaje-transito/mensaje-transito.module').then( m => m.MensajeTransitoPageModule)
  },
  {
    path: 'descenso',
    loadChildren: () => import('./descenso/descenso.module').then( m => m.DescensoPageModule)
  },
  {
    path: 'patio-reserva',
    loadChildren: () => import('./patio-reserva/patio-reserva.module').then( m => m.PatioReservaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
