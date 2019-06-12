import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubjectsPage } from './my-subjects.page';

describe('MySubjectsPage', () => {
  let component: MySubjectsPage;
  let fixture: ComponentFixture<MySubjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySubjectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
