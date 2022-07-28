import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ICommodity } from 'src/app/shared/interfaces/ICommodity';
import { IKeyactions } from 'src/app/shared/interfaces/IKeyactions';
import { IModel } from 'src/app/shared/interfaces/IModel';
import { ITrend } from 'src/app/shared/interfaces/ITrend';
import { HistoryActionsComponent } from 'src/app/shared/widgets/history-actions/history-actions.component';
import { ApiGetDataService } from '../../services/api-get-data.service';

import { ActionsHistoryComponent } from './actions-history.component';

describe('ActionsHistoryComponent', () => {
  let component: ActionsHistoryComponent;
  let fixture: ComponentFixture<ActionsHistoryComponent>;
  let keyactions: IKeyactions[];
  let models: IModel[];
  let commodities: ICommodity[];
  let mockDataService: ApiGetDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      declarations: [ ActionsHistoryComponent ],
      imports:[HttpClientTestingModule] ,         
      providers:[ApiGetDataService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsHistoryComponent);
    mockDataService = TestBed.inject(ApiGetDataService);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  beforeEach(()=> {
    keyactions = [
      {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,newTradeAction: 0,pnlDaily: 15183.69},
      {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,newTradeAction: 0,pnlDaily: 15183.69},
      {commodity:'Oil',model:'FTSE',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,newTradeAction: 0,pnlDaily: 15183.69},
      {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,newTradeAction: 0,pnlDaily: 15183.69},
      {commodity:'Oil',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,newTradeAction: 0, pnlDaily: 15183.69},      
    ];
    models = [{id: 1, name: 'S&P'}, {id: 2, name: 'FTSE'}];
    commodities = [{id: 1,modelId: 1, name: 'Gold'}, {id: 2,modelId: 2,name: 'Oil'}];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find a child component', async () => {  
    spyOn(mockDataService,'getActionsHistory').and.returnValue(Promise.resolve(keyactions));          
    spyOn(mockDataService,'getAllModels').and.returnValue(Promise.resolve(models));
    spyOn(mockDataService,'getAllCommodities').and.returnValue(Promise.resolve(commodities));
  
    fixture.detectChanges();  
    
    const actionHistoryComponentDEs = fixture.debugElement.queryAll(By.css('.historyComponent'));
    const actionHistoryInstance = actionHistoryComponentDEs[0].componentInstance as HistoryActionsComponent;
    expect(actionHistoryInstance).toBeTruthy();
  });

});
