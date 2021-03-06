import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuperheroesComponent } from './list-superheroes.component';

describe('ListSuperheroesComponent', () => {
  let component: ListSuperheroesComponent;
  let fixture: ComponentFixture<ListSuperheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSuperheroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
