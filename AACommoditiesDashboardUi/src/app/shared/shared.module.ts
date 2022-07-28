import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { YearlyPnlComponent } from './widgets/yearly-pnl/yearly-pnl.component';
import { CumulativePnlComponent } from './widgets/cumulative-pnl/cumulative-pnl.component';
import { HistoricalTrendComponent } from './widgets/historical-trend/historical-trend.component';
import { HistoryActionsComponent } from './widgets/history-actions/history-actions.component';
import {matSelectAnimations, MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,    
    YearlyPnlComponent,
    CumulativePnlComponent,
    HistoricalTrendComponent,
    HistoryActionsComponent,    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule, 
    RouterModule,
    HighchartsChartModule, 
    MatSelectModule,
    FormsModule,   
    ReactiveFormsModule    
  ],
  exports:[FooterComponent, HeaderComponent, ToolbarComponent, YearlyPnlComponent, CumulativePnlComponent,HistoricalTrendComponent, HistoryActionsComponent]
   
})
export class SharedModule { }
