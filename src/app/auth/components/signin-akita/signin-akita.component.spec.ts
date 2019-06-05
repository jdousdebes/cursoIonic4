import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninAkitaComponent } from './signin-akita.component';

describe('SigninAkitaComponent', () => {
  let component: SigninAkitaComponent;
  let fixture: ComponentFixture<SigninAkitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninAkitaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninAkitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
