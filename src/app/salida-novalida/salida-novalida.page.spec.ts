import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalidaNovalidaPage } from './salida-novalida.page';

describe('SalidaNovalidaPage', () => {
  let component: SalidaNovalidaPage;
  let fixture: ComponentFixture<SalidaNovalidaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalidaNovalidaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalidaNovalidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
