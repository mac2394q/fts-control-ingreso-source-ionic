import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-descenso',
  templateUrl: './descenso.page.html',
  styleUrls: ['./descenso.page.scss'],
})
export class DescensoPage implements OnInit {

  ciudades = ['Armenia', 'Cali', 'Bogota', 'Buenaventura'];
  numeroPasajeros = [];


  constructor(private route: Router, private activatedRoute: ActivatedRoute) {

    this.generarPasajeros();

  }

  ngOnInit() {
  }

  generarPasajeros(){
    for (let index = 1; index <= 40; index++) {
      this.numeroPasajeros.push(index);
    }

  }
  
  procesarDescensoOrigen(){
    
    localStorage.setItem('numeroPasajeros', "");
    localStorage.setItem('ciudadOrigen', "");
    localStorage.setItem('idciudadOrigen', "");
    this.route.navigate(['/descenso/descenso-origen']);
  }
  
  procesarDescensoDescenso(){
    this.route.navigate(['/descenso/descenso']);
  }
  
  
  procesarDescensoPatio(){
    this.route.navigate(['/descenso/descenso-patio']);
  }

}
