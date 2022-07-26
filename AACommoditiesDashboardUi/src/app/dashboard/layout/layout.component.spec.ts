import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  let navbartitles :string[];
  let navbarlinks :string[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent, ToolbarComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    navbartitles = ['Key Metrics','Actions History'];
    navbarlinks = ['','actions'];

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create only one child element', ()=>{
    component.navbarlinks = navbarlinks;
    component.navbartitles = navbartitles;
    fixture.detectChanges();
    const toolBarComponentDEs = fixture.debugElement.queryAll(By.css('.toolbar'));
    expect(toolBarComponentDEs.length).toEqual(1);
  });

  it('should check child component received correct inputs', () => {
    component.navbarlinks = navbarlinks;
    component.navbartitles = navbartitles;
    fixture.detectChanges();
    const toolBarComponentDEs = fixture.debugElement.queryAll(By.css('.toolbar'));
    let toolBarInstance = toolBarComponentDEs[0].componentInstance as ToolbarComponent;
    expect(toolBarInstance.navbartitles.length).toEqual(navbartitles.length);
  });

});
