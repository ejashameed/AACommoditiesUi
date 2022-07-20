import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyPnlComponent } from './yearly-pnl.component';

describe('YearlyPnlComponent', () => {
  let component: YearlyPnlComponent;
  let fixture: ComponentFixture<YearlyPnlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyPnlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlyPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
