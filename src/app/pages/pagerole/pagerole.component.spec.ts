import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageroleComponent } from './pagerole.component';

describe('PageroleComponent', () => {
  let component: PageroleComponent;
  let fixture: ComponentFixture<PageroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
