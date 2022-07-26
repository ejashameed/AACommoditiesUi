import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  navbartitles :string[] = ['Key Metrics','Actions History'];
  navbarlinks :string[] = ['','actions'];

  constructor() { }
  
  ngOnInit(): void {
  }

}
