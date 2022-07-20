import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumulativePnlComponent } from './cumulative-pnl.component';

describe('CumulativePnlComponent', () => {
  let component: CumulativePnlComponent;
  let fixture: ComponentFixture<CumulativePnlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumulativePnlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CumulativePnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
