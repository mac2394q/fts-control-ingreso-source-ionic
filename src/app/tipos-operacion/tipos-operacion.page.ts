import { Component, OnInit } from '@angular/core';
import { IngresoSalida } from 'src/app/models/IngresoSalida';
import { IngresoSalidaUI } from 'src/app/models/IngresoSalidaUI';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-tipos-operacion',
  templateUrl: './tipos-operacion.page.html',
  styleUrls: ['./tipos-operacion.page.scss'],
})
export class TiposOperacionPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  origen(){
    localStorage.setItem('tipoOperacion', "1");
    this.route.navigate(['origen']);
  }

  transito(){
    localStorage.setItem('tipoOperacion', "2");
    this.route.navigate(['transito']);
  }

  descenso(){
    localStorage.setItem('tipoOperacion', "3");
    this.route.navigate(['descenso']);
  }

  patio(){
    localStorage.setItem('tipoOperacion', "4");
    this.route.navigate(['patio-reserva']);
  }

}
