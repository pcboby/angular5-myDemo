/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDndComponent } from './myDnd.component';

describe('MyDndComponent', () => {
  let component: MyDndComponent;
  let fixture: ComponentFixture<MyDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
