/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SourceItemsComponent } from './sourceItems.component';

describe('SourceItemsComponent', () => {
  let component: SourceItemsComponent;
  let fixture: ComponentFixture<SourceItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
