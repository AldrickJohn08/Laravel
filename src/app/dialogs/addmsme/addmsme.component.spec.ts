import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmsmeComponent } from './addmsme.component';

describe('AddmsmeComponent', () => {
  let component: AddmsmeComponent;
  let fixture: ComponentFixture<AddmsmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmsmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmsmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
