import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrigenPage } from './origen.page';

describe('OrigenPage', () => {
  let component: OrigenPage;
  let fixture: ComponentFixture<OrigenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrigenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
