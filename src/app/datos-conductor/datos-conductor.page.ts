import { Component, OnInit } from '@angular/core';
import { IngresoSalida } from 'src/app/models/IngresoSalida';
import { IngresoSalidaUI } from 'src/app/models/IngresoSalidaUI';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-datos-conductor',
  templateUrl: './datos-conductor.page.html',
  styleUrls: ['./datos-conductor.page.scss'],
})
export class DatosConductorPage implements OnInit {

  ingresoSalidaUI: IngresoSalidaUI = {
    vehiculo_id: '',
    conductor_id: '',
    tipo_operacion_id: '',
    numero_interno: '',
    empresa_trasnporte: '',
    urlImage: '',
    documento: '',
    nombre: ''
  };
  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // var url = localStorage.getItem('urlImage');
    // url  = url.replace(/[^a-z0-9]/gi, '');
    // console.log(url);
    
    
    this.ingresoSalidaUI.urlImage = localStorage.getItem('urlImage');;
    this.ingresoSalidaUI.documento = localStorage.getItem('documentoConductor');
    this.ingresoSalidaUI.nombre = localStorage.getItem('nombreConductor');
    
  }

}
