import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-origen',
  templateUrl: './origen.page.html',
  styleUrls: ['./origen.page.scss'],
})
export class OrigenPage implements OnInit {

  horas = [];
  minutos = [];

  constructor() {

    for (let index = 1; index < 60; index++) {
      this.minutos.push(index);
    }

    this.generarHoras();
  }

  ngOnInit() {
  }

  generarHoras(){
    for (let index = 1; index <= 23; index++) {
      this.horas.push(index);
    }
    this.horas.push('00');
  }

  seleccionarHora(){
    localStorage.setItem('hora_origen', '');
  }

}
