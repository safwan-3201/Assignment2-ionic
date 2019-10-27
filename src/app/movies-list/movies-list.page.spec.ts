import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListPage } from './movies-list.page';

describe('MoviesListPage', () => {
  let component: MoviesListPage;
  let fixture: ComponentFixture<MoviesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
