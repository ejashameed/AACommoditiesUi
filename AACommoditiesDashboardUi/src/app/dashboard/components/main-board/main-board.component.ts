import { Component, OnInit } from '@angular/core';
import { ICumulativePnL } from 'src/app/shared/interfaces/ICumulativePnL';
import { IYearlyPnL } from 'src/app/shared/interfaces/IYearlyPnL';
import { ApiGetDataService } from '../../services/api-get-data.service';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit {
  /*
  datasource1: IYearlyPnL[] = [
    {year: 2018,commodity:'Gold',model:'S&P',cumulativeSum:711149.36},
    {year: 2019,commodity:'Oil',model:'FTSE',cumulativeSum:11149.36},
    {year: 2020,commodity:'Gold',model:'FTSE',cumulativeSum:11149.36}
  ]
  */

  datasource1: IYearlyPnL[] = [];
  datasource2: ICumulativePnL[] = [];
  
  //datasource2: ICumulativePnL[] = [{commodity:'Gold',model:'S&P',cumulativeSum:711149.36},{commodity:'Oil',model:'FTSE',cumulativeSum:11149.36}]
  
  constructor(private dataService: ApiGetDataService) { }

  ngOnInit(): void {

    this.dataService.getyearlyPnlData().then(data => this.datasource1 = data);
    this.dataService.getCumulativePnlData().then(data => this.datasource2 = data);
  }

}
