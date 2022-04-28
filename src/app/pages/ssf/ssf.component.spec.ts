import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsfComponent } from './ssf.component';

describe('SsfComponent', () => {
  let component: SsfComponent;
  let fixture: ComponentFixture<SsfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
