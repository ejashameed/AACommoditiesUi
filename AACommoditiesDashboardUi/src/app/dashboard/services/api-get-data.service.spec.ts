import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AppConfiguration } from "read-appsettings-json";
import { ICumulativePnL } from "src/app/shared/interfaces/ICumulativePnL";
import { IYearlyPnL } from "src/app/shared/interfaces/IYearlyPnL";

describe('Http client testing',() => {
let httpClient: HttpClient;
let httpTestngController: HttpTestingController;
let apiUrl: string;
let yearlyPnl: IYearlyPnL[];
let cumulativePnl: ICumulativePnL[];

beforeEach(() =>{
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  })

  httpClient = TestBed.inject(HttpClient);
  httpTestngController = TestBed.inject(HttpTestingController);
  apiUrl = AppConfiguration.Setting().ApiUrl;

})

it('should call the pnl-ytd API Url', () =>{
  yearlyPnl = [
    {year: 2018,commodity:'Gold',model:'S&P',cumulativeSum:711149.36},
    {year: 2019,commodity:'Oil',model:'FTSE',cumulativeSum:11149.36},
    {year: 2020,commodity:'Gold',model:'FTSE',cumulativeSum:11149.36}
  ]

  httpClient.get<IYearlyPnL[]>(apiUrl + '/commodities/keymetrics/pnl-ytd').subscribe(data => {
    expect(data).toEqual(yearlyPnl);
  });

  const request = httpTestngController.expectOne(apiUrl + '/commodities/keymetrics/pnl-ytd');
  request.flush(yearlyPnl);
  expect(request.request.method).toBe('GET');

});

it('should call the cumulative API Url', () =>{
  cumulativePnl = [{commodity:'Gold',model:'S&P',cumulativeSum:711149.36},{commodity:'Oil',model:'FTSE',cumulativeSum:11149.36}];

  httpClient.get<ICumulativePnL[]>(apiUrl + '/commodities/keymetrics/pnl-cumulative').subscribe(data => {
    expect(data).toEqual(cumulativePnl);
  })

  const request = httpTestngController.expectOne(apiUrl + '/commodities/keymetrics/pnl-cumulative');
  request.flush(cumulativePnl);
  expect(request.request.method).toBe('GET');

});

});


