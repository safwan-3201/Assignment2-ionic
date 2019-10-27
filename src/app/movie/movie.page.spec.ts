import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePage } from './movie.page';

describe('MoviePage', () => {
  let component: MoviePage;
  let fixture: ComponentFixture<MoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
