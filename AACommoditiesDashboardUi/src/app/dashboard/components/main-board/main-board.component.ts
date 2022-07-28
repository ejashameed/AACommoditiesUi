import { Component, OnInit } from '@angular/core';
import { ICumulativePnL } from 'src/app/shared/interfaces/ICumulativePnL';
import { ITrend } from 'src/app/shared/interfaces/ITrend';
import { IYearlyPnL } from 'src/app/shared/interfaces/IYearlyPnL';
import { ApiGetDataService } from '../../services/api-get-data.service';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss']
})
export class MainBoardComponent implements OnInit {
 
  pnlData: IYearlyPnL[] = [];
  cumulativePnlData: ICumulativePnL[] = [];
  seriesData: ITrend[] = [];
  trendYear: number = 2019;

  constructor(private dataService: ApiGetDataService) { }

  ngOnInit(): void {
    this.LoadData();    
  }

  async LoadData(){
    this.pnlData = await this.dataService.getyearlyPnlData();
    this.cumulativePnlData = await this.dataService.getCumulativePnlData();
    this.seriesData = await this.dataService.getPriceTrendData(this.trendYear);
  }
}
