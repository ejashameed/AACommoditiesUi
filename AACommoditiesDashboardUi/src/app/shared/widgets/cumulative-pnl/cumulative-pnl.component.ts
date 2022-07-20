import { Component, Input, OnInit } from '@angular/core';
import { ICumulativePnL } from '../../interfaces/ICumulativePnL';

@Component({
  selector: 'app-cumulative-pnl',
  templateUrl: './cumulative-pnl.component.html',
  styleUrls: ['./cumulative-pnl.component.scss']
})
export class CumulativePnlComponent implements OnInit {
  @Input() datasource : ICumulativePnL [] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
