import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatioReservaPage } from './patio-reserva.page';

describe('PatioReservaPage', () => {
  let component: PatioReservaPage;
  let fixture: ComponentFixture<PatioReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatioReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatioReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
