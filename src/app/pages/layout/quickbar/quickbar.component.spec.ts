/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuickbarComponent } from './quickbar.component';

describe('QuickbarComponent', () => {
  let component: QuickbarComponent;
  let fixture: ComponentFixture<QuickbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});