import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IYearlyPnL } from 'src/app/shared/interfaces/IYearlyPnL';
import { firstValueFrom } from 'rxjs';
import { ICumulativePnL } from 'src/app/shared/interfaces/ICumulativePnL';
import { IKeyactions } from 'src/app/shared/interfaces/IKeyactions';
import { AppConfiguration } from "read-appsettings-json";
import { ICommodity } from 'src/app/shared/interfaces/ICommodity';
import { IModel } from 'src/app/shared/interfaces/IModel';
import { ITrend } from 'src/app/shared/interfaces/ITrend';

@Injectable({
  providedIn: 'root'
})
export class ApiGetDataService {

  apiURL = AppConfiguration.Setting().ApiUrl
  apiData: IYearlyPnL[] = [];
  constructor(private http: HttpClient) { }

  async getyearlyPnlData():Promise<IYearlyPnL[]> {
    var yearPnl: IYearlyPnL[] = [];
    return await firstValueFrom(this.http.get<IYearlyPnL[]>(this.apiURL + '/commodities/keymetrics/pnl-ytd'));        
  }

  async getCumulativePnlData(): Promise<ICumulativePnL[]> {
    return await firstValueFrom(this.http.get<ICumulativePnL[]>(this.apiURL + '/commodities/keymetrics/pnl-cumulative'));
  }

  async getPriceTrendData(year: number): Promise<ITrend[]> {
    
    return await firstValueFrom(this.http.get<ITrend[]>(this.apiURL + '/commodities/historical/price-ytd-trends/' + year));
  }

  async getActionsHistory(): Promise<IKeyactions[]> {
    return await firstValueFrom(this.http.get<IKeyactions[]>(this.apiURL + '/commodities/historical/keyactions'));
  }

  async getAllCommodities(): Promise<ICommodity[]> {
    return await firstValueFrom(this.http.get<ICommodity[]>(this.apiURL + '/commodities/ListCommodites'));
  }

  async getAllModels(): Promise<IModel[]> {
    return await firstValueFrom(this.http.get<IModel[]>(this.apiURL + '/commodities/ListModels'));
  }

}


