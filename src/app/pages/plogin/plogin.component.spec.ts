/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PloginComponent } from './plogin.component';

describe('PloginComponent', () => {
  let component: PloginComponent;
  let fixture: ComponentFixture<PloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
