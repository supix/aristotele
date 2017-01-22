/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DayDateComponent } from './day-date.component';

describe('DayDateComponent', () => {
  let component: DayDateComponent;
  let fixture: ComponentFixture<DayDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
