import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiposOperacionPage } from './tipos-operacion.page';

describe('TiposOperacionPage', () => {
  let component: TiposOperacionPage;
  let fixture: ComponentFixture<TiposOperacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposOperacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiposOperacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
