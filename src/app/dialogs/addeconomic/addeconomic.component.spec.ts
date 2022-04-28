import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeconomicComponent } from './addeconomic.component';

describe('AddeconomicComponent', () => {
  let component: AddeconomicComponent;
  let fixture: ComponentFixture<AddeconomicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeconomicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
