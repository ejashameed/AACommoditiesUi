import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import { ActionsHistoryComponent } from './components/actions-history/actions-history.component';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [    
    LayoutComponent, ActionsHistoryComponent, MainBoardComponent,
  ],
  imports: [
    CommonModule,    
    RouterModule,
    DashboardRoutingModule,
    MatDividerModule,
    SharedModule, 
    HttpClientModule   
  ]
})
export class DashboardModule { }
