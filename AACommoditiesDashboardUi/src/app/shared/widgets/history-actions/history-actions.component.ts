import { Component, Input, OnInit } from '@angular/core';
import { IKeyactions } from '../../interfaces/IKeyactions';

@Component({
  selector: 'app-history-actions',
  templateUrl: './history-actions.component.html',
  styleUrls: ['./history-actions.component.scss']
})
export class HistoryActionsComponent implements OnInit {
  @Input() datasource : IKeyactions [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
