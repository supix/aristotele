/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnallocatedComponent } from './unallocated.component';

describe('UnallocatedComponent', () => {
  let component: UnallocatedComponent;
  let fixture: ComponentFixture<UnallocatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnallocatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnallocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
