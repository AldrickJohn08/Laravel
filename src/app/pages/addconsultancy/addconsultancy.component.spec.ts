import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconsultancyComponent } from './addconsultancy.component';

describe('AddconsultancyComponent', () => {
  let component: AddconsultancyComponent;
  let fixture: ComponentFixture<AddconsultancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddconsultancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddconsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
