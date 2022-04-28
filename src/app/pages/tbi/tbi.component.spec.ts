import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbiComponent } from './tbi.component';

describe('TbiComponent', () => {
  let component: TbiComponent;
  let fixture: ComponentFixture<TbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
