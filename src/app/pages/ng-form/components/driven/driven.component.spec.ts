/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrivenComponent } from './driven.component';

describe('DrivenComponent', () => {
  let component: DrivenComponent;
  let fixture: ComponentFixture<DrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
