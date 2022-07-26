import { DataSource } from '@angular/cdk/collections';
import { compilePipeFromMetadata } from '@angular/compiler';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IKeyactions } from '../../interfaces/IKeyactions';

import { HistoryActionsComponent } from './history-actions.component';

describe('HistoryActionsComponent', () => {
  let component: HistoryActionsComponent;
  let fixture: ComponentFixture<HistoryActionsComponent>;
  let keyactions: IKeyactions[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryActionsComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    keyactions = [
      {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,newTradeAction: 0,pnlDaily: 15183.69},
      {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,newTradeAction: 0,pnlDaily: 15183.69},
      {commodity:'Oil',model:'FTSE',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,newTradeAction: 0,pnlDaily: 15183.69},
      {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,newTradeAction: 0,pnlDaily: 15183.69},
      {commodity:'Oil',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,newTradeAction: 0, pnlDaily: 15183.69},      
    ]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive inout', () => {
    component.datasource = keyactions;
    expect(component.datasource.length).toEqual(keyactions.length);
  });

  it('should filter by commodity', ()=> {
    component.datasource = keyactions;
    component.originalSource = keyactions;
    component.onCommodityChange('Gold');
    expect(component.datasource.length).toEqual(3);
  });

  it('should filter by model', ()=> {
    component.datasource = keyactions;
    component.originalSource = keyactions;
    component.onModelChange('FTSE');
    expect(component.datasource.length).toEqual(1);
  });

});

