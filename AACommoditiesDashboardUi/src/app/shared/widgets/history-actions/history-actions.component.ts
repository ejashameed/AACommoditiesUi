import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { objectEach } from 'highcharts';
import { ICommodity } from '../../interfaces/ICommodity';
import { IKeyactions } from '../../interfaces/IKeyactions';
import { IModel } from '../../interfaces/IModel';


@Component({
  selector: 'app-history-actions',
  templateUrl: './history-actions.component.html',
  styleUrls: ['./history-actions.component.scss']
})
export class HistoryActionsComponent implements OnInit, OnChanges {
  @Input() datasource : IKeyactions [] = [];
  @Input() modelList: IModel[] = [];
  @Input() commodityList: ICommodity[] = [];

  originalSource: IKeyactions[] = [];
 
  models = new FormControl('');
  modelSelected = 'none';
  commoditySelected = 'none';

  constructor() { }

  ngOnInit(): void {  
  }

  ngOnChanges() {
    this.originalSource = this.datasource;    
  }

  onCommodityChange(selectedItem: any) {    
    this.modelSelected = 'All';
    if(selectedItem.value == 'All'){
      this.datasource = this.originalSource;
    }else {
      this.datasource = this.originalSource.filter(item => item.commodity == selectedItem.value);
    }     
  }

  onModelChange(selectedItem: any) {
    this.commoditySelected = 'All';
    if(selectedItem.value == 'All'){
      this.datasource = this.originalSource;
    }else {
      this.datasource = this.originalSource.filter(item => item.model == selectedItem.value);
    }     
  }

}
