/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardIframeComponent } from './card-iframe.component';

describe('CardIframeComponent', () => {
  let component: CardIframeComponent;
  let fixture: ComponentFixture<CardIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
