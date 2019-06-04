import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSubjectsPage } from './available-subjects.page';

describe('AvailableSubjectsPage', () => {
  let component: AvailableSubjectsPage;
  let fixture: ComponentFixture<AvailableSubjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableSubjectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableSubjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
