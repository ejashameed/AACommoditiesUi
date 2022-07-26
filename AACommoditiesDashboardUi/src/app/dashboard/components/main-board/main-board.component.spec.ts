import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiGetDataService } from '../../services/api-get-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MainBoardComponent } from './main-board.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { IYearlyPnL } from 'src/app/shared/interfaces/IYearlyPnL';
import { ICumulativePnL } from 'src/app/shared/interfaces/ICumulativePnL';
import { ITrend } from 'src/app/shared/interfaces/ITrend';
import { By } from '@angular/platform-browser';
import { YearlyPnlComponent } from 'src/app/shared/widgets/yearly-pnl/yearly-pnl.component';
import { CumulativePnlComponent } from 'src/app/shared/widgets/cumulative-pnl/cumulative-pnl.component';
import { HistoricalTrendComponent } from 'src/app/shared/widgets/historical-trend/historical-trend.component';

describe('MainBoardComponent', () => {
  let component: MainBoardComponent;
  let fixture: ComponentFixture<MainBoardComponent>;
  let mockDataService: ApiGetDataService;

  let yearlyPnl: IYearlyPnL[];
  let cumulativePnl: ICumulativePnL[];
  let trendData: ITrend[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({      
      declarations: [ MainBoardComponent, HeaderComponent, FooterComponent ],
      imports:[HttpClientTestingModule] ,         
      providers:[ApiGetDataService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBoardComponent);
    component = fixture.componentInstance;
    mockDataService = TestBed.inject(ApiGetDataService);
    fixture.detectChanges();
  });

  beforeEach(() => {    
    yearlyPnl = [
      {year: 2018,commodity:'Gold',model:'S&P',cumulativeSum:711149.36},
      {year: 2019,commodity:'Oil',model:'FTSE',cumulativeSum:11149.36},
      {year: 2020,commodity:'Gold',model:'FTSE',cumulativeSum:11149.36}
    ];

    cumulativePnl = [{commodity:'Gold',model:'S&P',cumulativeSum:711149.36},{commodity:'Oil',model:'FTSE',cumulativeSum:11149.36}];
    
    trendData = [
      {
        "name": "Gold-S&P",
        "type": "line",
        "data": [31823,32649]          
      }
    ]    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find child components', async () => {  
    spyOn(mockDataService,'getyearlyPnlData').and.returnValue(Promise.resolve(yearlyPnl));          
    spyOn(mockDataService,'getCumulativePnlData').and.returnValue(Promise.resolve(cumulativePnl));
    spyOn(mockDataService,'getPriceTrendData').and.returnValue(Promise.resolve(trendData));
  
    fixture.detectChanges();  
    
    const yearlyPnlComponentDEs = fixture.debugElement.queryAll(By.css('.pnl'));
    const yearlyPnlComponentInstance = yearlyPnlComponentDEs[0].componentInstance as YearlyPnlComponent;
    expect(yearlyPnlComponentInstance).toBeTruthy();
    
    const trendComponentDEs = fixture.debugElement.queryAll(By.css('.series'));
    const trendComponentInstance = trendComponentDEs[0].componentInstance as HistoricalTrendComponent;
    expect(trendComponentInstance).toBeTruthy();
  });


});
