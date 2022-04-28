import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddssfComponent } from './addssf.component';

describe('AddssfComponent', () => {
  let component: AddssfComponent;
  let fixture: ComponentFixture<AddssfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddssfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddssfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
