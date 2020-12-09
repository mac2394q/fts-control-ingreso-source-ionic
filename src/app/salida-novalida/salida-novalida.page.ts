import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-salida-novalida',
  templateUrl: './salida-novalida.page.html',
  styleUrls: ['./salida-novalida.page.scss'],
})
export class SalidaNovalidaPage implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    setInterval(() => {
      this.route.navigate(['datos-vehiculo']);
  
    }, 10000);
  }
}
