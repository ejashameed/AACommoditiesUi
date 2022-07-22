import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IYearlyPnL } from 'src/app/shared/interfaces/IYearlyPnL';
import { firstValueFrom } from 'rxjs';
import { ICumulativePnL } from 'src/app/shared/interfaces/ICumulativePnL';
import { IKeyactions } from 'src/app/shared/interfaces/IKeyactions';
import { AppConfiguration } from "read-appsettings-json";
import { ICommodity } from 'src/app/shared/interfaces/ICommodity';
import { IModel } from 'src/app/shared/interfaces/IModel';

@Injectable({
  providedIn: 'root'
})
export class ApiGetDataService {

  apiURL = AppConfiguration.Setting().ApiUrl

  constructor(private http: HttpClient) { }

  getyearlyPnlData(): Promise<IYearlyPnL[]> {    
    return firstValueFrom(this.http.get<IYearlyPnL[]>(this.apiURL + '/commodities/keymetrics/pnl-ytd'));                    
  }

  getCumulativePnlData(): Promise<ICumulativePnL[]> {    
    return firstValueFrom(this.http.get<ICumulativePnL[]>(this.apiURL + '/commodities/keymetrics/pnl-cumulative'));                    
  }

  getActionsHistory(): Promise<IKeyactions[]> {    
    return firstValueFrom(this.http.get<IKeyactions[]>(this.apiURL + '/commodities/historical/keyactions'));                    
  }

  getAllCommodities(): Promise<ICommodity[]> {    
    return firstValueFrom(this.http.get<ICommodity[]>(this.apiURL + '/commodities/ListCommodites'));                    
  }

  getAllModels(): Promise<IModel[]> {    
    return firstValueFrom(this.http.get<IModel[]>(this.apiURL + '/commodities/ListModels'));                    
  }

}


