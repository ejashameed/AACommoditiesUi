import { Component, OnInit } from '@angular/core';
import { ICumulativePnL } from 'src/app/shared/interfaces/ICumulativePnL';
import { IYearlyPnL } from 'src/app/shared/interfaces/IYearlyPnL';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit {
  datasource1: IYearlyPnL[] = [
    {year: 2018,commodity:'Gold',model:'S&P',cumulativeSum:711149.36},
    {year: 2019,commodity:'Oil',model:'FTSE',cumulativeSum:11149.36},
    {year: 2020,commodity:'Gold',model:'FTSE',cumulativeSum:11149.36}
  ]
  datasource2: ICumulativePnL[] = [{commodity:'Gold',model:'S&P',cumulativeSum:711149.36},{commodity:'Oil',model:'FTSE',cumulativeSum:11149.36}]
  constructor() { }

  ngOnInit(): void {
  }

}
