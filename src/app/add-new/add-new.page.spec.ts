import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPage } from './add-new.page';

describe('AddNewPage', () => {
  let component: AddNewPage;
  let fixture: ComponentFixture<AddNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
