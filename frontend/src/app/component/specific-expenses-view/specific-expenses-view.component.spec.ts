import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificExpensesViewComponent } from './specific-expenses-view.component';

describe('SpecificExpensesViewComponent', () => {
  let component: SpecificExpensesViewComponent;
  let fixture: ComponentFixture<SpecificExpensesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificExpensesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificExpensesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
