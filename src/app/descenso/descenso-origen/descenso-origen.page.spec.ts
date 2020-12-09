import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescensoOrigenPage } from './descenso-origen.page';

describe('DescensoOrigenPage', () => {
  let component: DescensoOrigenPage;
  let fixture: ComponentFixture<DescensoOrigenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescensoOrigenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescensoOrigenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
