import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosConductorPage } from './datos-conductor.page';

describe('DatosConductorPage', () => {
  let component: DatosConductorPage;
  let fixture: ComponentFixture<DatosConductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosConductorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
