import { Component, OnInit } from '@angular/core';
import { ICommodity } from 'src/app/shared/interfaces/ICommodity';
import { IKeyactions } from 'src/app/shared/interfaces/IKeyactions';
import { IModel } from 'src/app/shared/interfaces/IModel';
import { ApiGetDataService } from '../../services/api-get-data.service';

@Component({
  selector: 'app-actions-history',
  templateUrl: './actions-history.component.html',
  styleUrls: ['./actions-history.component.scss']
})
export class ActionsHistoryComponent implements OnInit {

  historyData: IKeyactions[] = [];
  modelList: IModel[]= [];
  commodityList: ICommodity[]= [];

  constructor(private dataService: ApiGetDataService) { }

  ngOnInit(): void {
    this.dataService.getActionsHistory().then(data => this.historyData = data);
    this.dataService.getAllModels().then(data => this.modelList = data);
    this.dataService.getAllCommodities().then(data => this.commodityList = data);
  }
/*
  datasource1: IKeyactions[] = [
    {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,tradeAction: 0,pnlDaily: 15183.69},
    {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,tradeAction: 0,pnlDaily: 15183.69},
    {commodity:'Oil',model:'FTSE',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,tradeAction: 0,pnlDaily: 15183.69},
    {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,tradeAction: 0,pnlDaily: 15183.69},
    {commodity:'Oil',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,tradeAction: 0, pnlDaily: 15183.69},
    
  ]
*/



}
