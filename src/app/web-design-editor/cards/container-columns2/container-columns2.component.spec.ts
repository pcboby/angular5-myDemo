/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContainerColumns2Component } from './container-columns2.component';

describe('ContainerColumns2Component', () => {
  let component: ContainerColumns2Component;
  let fixture: ComponentFixture<ContainerColumns2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerColumns2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerColumns2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
