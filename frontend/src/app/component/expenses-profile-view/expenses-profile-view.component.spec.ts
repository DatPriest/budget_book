import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesProfileViewComponent } from './expenses-profile-view.component';

describe('ExpensesProfileViewComponent', () => {
  let component: ExpensesProfileViewComponent;
  let fixture: ComponentFixture<ExpensesProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
