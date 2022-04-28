import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrdfComponent } from './addrdf.component';

describe('AddrdfComponent', () => {
  let component: AddrdfComponent;
  let fixture: ComponentFixture<AddrdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
