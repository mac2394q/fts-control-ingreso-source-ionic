import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensajeTransitoPage } from './mensaje-transito.page';

describe('MensajeTransitoPage', () => {
  let component: MensajeTransitoPage;
  let fixture: ComponentFixture<MensajeTransitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeTransitoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensajeTransitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
