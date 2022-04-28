import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnegosyoComponent } from './addnegosyo.component';

describe('AddnegosyoComponent', () => {
  let component: AddnegosyoComponent;
  let fixture: ComponentFixture<AddnegosyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnegosyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnegosyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
