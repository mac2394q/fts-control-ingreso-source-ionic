import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescensoPage } from './descenso.page';

describe('DescensoPage', () => {
  let component: DescensoPage;
  let fixture: ComponentFixture<DescensoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescensoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescensoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
