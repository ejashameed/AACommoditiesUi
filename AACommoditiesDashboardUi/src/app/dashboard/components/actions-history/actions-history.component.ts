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
    this.LoadData();
  }

  async LoadData(){
    this.historyData = await this.dataService.getActionsHistory();
    this.modelList = await this.dataService.getAllModels();
    this.commodityList = await this.dataService.getAllCommodities();
  }
}
