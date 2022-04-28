import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtbiComponent } from './addtbi.component';

describe('AddtbiComponent', () => {
  let component: AddtbiComponent;
  let fixture: ComponentFixture<AddtbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
