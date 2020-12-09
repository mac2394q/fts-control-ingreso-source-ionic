import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescensoPatioPage } from './descenso-patio.page';

describe('DescensoPatioPage', () => {
  let component: DescensoPatioPage;
  let fixture: ComponentFixture<DescensoPatioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescensoPatioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescensoPatioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
