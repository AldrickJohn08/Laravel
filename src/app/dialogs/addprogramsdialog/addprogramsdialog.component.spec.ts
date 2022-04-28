import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprogramsdialogComponent } from './addprogramsdialog.component';

describe('AddprogramsdialogComponent', () => {
  let component: AddprogramsdialogComponent;
  let fixture: ComponentFixture<AddprogramsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprogramsdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprogramsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
