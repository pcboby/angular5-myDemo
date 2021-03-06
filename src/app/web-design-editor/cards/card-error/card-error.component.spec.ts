/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardErrorComponent } from './card-error.component';

describe('CardErrorComponent', () => {
  let component: CardErrorComponent;
  let fixture: ComponentFixture<CardErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
