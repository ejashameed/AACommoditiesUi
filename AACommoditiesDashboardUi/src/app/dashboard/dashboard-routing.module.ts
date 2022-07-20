import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { ActionsHistoryComponent } from './components/actions-history/actions-history.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '', component: MainBoardComponent
    },    
    {
      path: 'actions', component: ActionsHistoryComponent
    },    
  ]
}];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
