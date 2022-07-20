import { Component, OnInit } from '@angular/core';
import { IKeyactions } from 'src/app/shared/interfaces/IKeyactions';

@Component({
  selector: 'app-actions-history',
  templateUrl: './actions-history.component.html',
  styleUrls: ['./actions-history.component.scss']
})
export class ActionsHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datasource1: IKeyactions[] = [
    {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,tradeAction: 0,pnlDaily: 15183.69},
    {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,tradeAction: 0,pnlDaily: 15183.69},
    {commodity:'Oil',model:'FTSE',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,tradeAction: 0,pnlDaily: 15183.69},
    {commodity:'Gold',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,tradeAction: 0,pnlDaily: 15183.69},
    {commodity:'Oil',model:'S&P',date:new Date(),contract:'MAR 18',price: 31495.42,position: 1,tradeAction: 0, pnlDaily: 15183.69},
    
  ]



}
