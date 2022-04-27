import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewExpensesViewComponent } from "./new-expenses-view.component";

describe('NewExpensesViewComponent', () => {
  let component: NewExpensesViewComponent;
  let fixture: ComponentFixture<NewExpensesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExpensesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExpensesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
