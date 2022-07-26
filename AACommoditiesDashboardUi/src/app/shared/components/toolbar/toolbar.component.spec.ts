import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let navbartitles :string[];
  let navbarlinks :string[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ RouterTestingModule],
      declarations: [ ToolbarComponent ],      
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    navbartitles = ['Key Metrics','Actions History'];
    navbarlinks = ['','actions'];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive input from parent', () =>{
    component.navbartitles = navbartitles;
    component.navbarlinks = navbarlinks;
    expect(component.navbarlinks.length).toEqual(navbarlinks.length);
    expect(component.navbartitles.length).toEqual(navbartitles.length);
  });
});
