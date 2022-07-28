import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ITrend } from '../../interfaces/ITrend';

import { HistoricalTrendComponent } from './historical-trend.component';

describe('HistoricalTrendComponent', () => {
  let component: HistoricalTrendComponent;
  let fixture: ComponentFixture<HistoricalTrendComponent>;
  let trendData: ITrend[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricalTrendComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HistoricalTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    trendData = [
      {
        "name": "Gold-S&P",
        "type": "line",
        "data": [31823,32649]          
      }
    ]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive input data', () => {
    component.seriesData = trendData;
    expect(component.seriesData.length).toEqual(trendData.length);
  });

});
