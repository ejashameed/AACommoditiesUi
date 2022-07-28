import { Component, Input, OnInit } from '@angular/core';
import { IYearlyPnL } from '../../interfaces/IYearlyPnL';

@Component({
  selector: 'app-yearly-pnl',
  templateUrl: './yearly-pnl.component.html',
  styleUrls: ['./yearly-pnl.component.scss']
})
export class YearlyPnlComponent implements OnInit {
  @Input() datasource : IYearlyPnL [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
