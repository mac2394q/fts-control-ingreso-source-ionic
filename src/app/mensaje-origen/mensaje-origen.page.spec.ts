import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensajeOrigenPage } from './mensaje-origen.page';

describe('MensajeOrigenPage', () => {
  let component: MensajeOrigenPage;
  let fixture: ComponentFixture<MensajeOrigenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeOrigenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensajeOrigenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
