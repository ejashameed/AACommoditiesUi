import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICumulativePnL } from '../../interfaces/ICumulativePnL';

import { CumulativePnlComponent } from './cumulative-pnl.component';

describe('CumulativePnlComponent', () => {
  let component: CumulativePnlComponent;
  let fixture: ComponentFixture<CumulativePnlComponent>;
  let cumulativePnl: ICumulativePnL[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumulativePnlComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CumulativePnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    cumulativePnl = [{commodity:'Gold',model:'S&P',cumulativeSum:711149.36},{commodity:'Oil',model:'FTSE',cumulativeSum:11149.36}];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive input data', () => {
    component.datasource =  cumulativePnl;
    expect(component.datasource.length).toEqual(cumulativePnl.length);
  });

});
