import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transito',
  templateUrl: './transito.page.html',
  styleUrls: ['./transito.page.scss'],
})
export class TransitoPage implements OnInit {

  ciudades = ['Armenia','quindio','risaralda','medellin','tulua','Cali','Bogota','Buenaventura'];
  numeroPasajeros = [];

  constructor() { 
    this.generarPasajeros();
  }

  ngOnInit() {
  }

  generarPasajeros(){
    for (let index = 1; index <= 40; index++) {
      this.numeroPasajeros.push(index);
    }
    
  }

}
