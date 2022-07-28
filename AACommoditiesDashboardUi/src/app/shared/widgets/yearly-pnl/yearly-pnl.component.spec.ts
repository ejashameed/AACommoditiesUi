import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IYearlyPnL } from '../../interfaces/IYearlyPnL';

import { YearlyPnlComponent } from './yearly-pnl.component';

describe('YearlyPnlComponent', () => {
  let component: YearlyPnlComponent;
  let fixture: ComponentFixture<YearlyPnlComponent>;
  let yearlyPnl: IYearlyPnL[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyPnlComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlyPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    yearlyPnl = [
      {year: 2018,commodity:'Gold',model:'S&P',cumulativeSum:711149.36},
      {year: 2019,commodity:'Oil',model:'FTSE',cumulativeSum:11149.36},
      {year: 2020,commodity:'Gold',model:'FTSE',cumulativeSum:11149.36}
    ]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive input', () => {
    component.datasource = yearlyPnl;
    expect(component.datasource.length).toEqual(yearlyPnl.length);
  });
  
});
