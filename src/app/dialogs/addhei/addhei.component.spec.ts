import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddheiComponent } from './addhei.component';

describe('AddheiComponent', () => {
  let component: AddheiComponent;
  let fixture: ComponentFixture<AddheiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddheiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddheiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
