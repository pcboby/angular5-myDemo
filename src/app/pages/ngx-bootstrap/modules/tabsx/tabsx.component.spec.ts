/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabsxComponent } from './tabsx.component';

describe('TabsxComponent', () => {
  let component: TabsxComponent;
  let fixture: ComponentFixture<TabsxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
