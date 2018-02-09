/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TargetItemsComponent } from './targetItems.component';

describe('TargetItemsComponent', () => {
  let component: TargetItemsComponent;
  let fixture: ComponentFixture<TargetItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
