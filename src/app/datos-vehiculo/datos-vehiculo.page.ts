import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { IngresoSalida } from 'src/app/models/IngresoSalida';
import { IngresoSalidaUI } from 'src/app/models/IngresoSalidaUI';
import { ActivatedRoute , Router } from '@angular/router';



@Component({
  selector: 'app-datos-vehiculo',
  templateUrl: './datos-vehiculo.page.html',
  styleUrls: ['./datos-vehiculo.page.scss'],
})
export class DatosVehiculoPage implements OnInit {

  ingresoSalida: IngresoSalida = {
    id: 0,
    fecha_ingreso: '',
    hora_aproximada_despacho: '',
    fecha_salida: '',
    vehiculo_id: 0,
    conductor_id: 0,
    tipo_operacion_id: 0,
    fecha_creacion: '',
    fecha_modificacion: '',
    estado: 0
  };

  ingresoSalidaUI: IngresoSalidaUI = {
    vehiculo_id: '',
    conductor_id: '',
    tipo_operacion_id: '',
    numero_interno: '',
    empresa_trasnporte: '',
    urlImage: ''
  };

  constructor(private socket: Socket,private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //172.18.192.1
    this.socket.connect();
    this.socket.on('DataValidation', (data) => {
      console.log("Data -> " + data);
      var obj = JSON.parse(data);
      console.log(obj['Object_rest']);
   

      this.ingresoSalida.vehiculo_id = obj['vehiculo']['objeto']['placa'];
      this.ingresoSalida.conductor_id = obj['Object_rest']['idconductor'];
      this.ingresoSalidaUI.vehiculo_id = obj['vehiculo']['objeto']['placa'];
      this.ingresoSalidaUI.conductor_id = obj['Object_rest']['idconductor'];
      this.ingresoSalidaUI.numero_interno = obj['vehiculo']['objeto']['numero_interno'];
      this.ingresoSalidaUI.empresa_trasnporte = obj['vehiculo']['objeto']['empresa']['nombre_corto'];

      localStorage.setItem('urlImage', obj['Object_rest']['urlImagen']);
      localStorage.setItem('nombreConductor', JSON.stringify(obj['Object_rest']['nombre']));
      localStorage.setItem('documentoConductor', JSON.stringify(obj['Object_rest']['documento']));
      localStorage.setItem('conductor_id', JSON.stringify( obj['Object_rest']['idconductor']));
      localStorage.setItem('vehiculo_id', JSON.stringify(obj['vehiculo']['objeto']['placa']));
     
      
    }
    );
  }

}
