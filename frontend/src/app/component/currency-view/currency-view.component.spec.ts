import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyViewComponent } from './currency-view.component';

describe('CurrencyViewComponent', () => {
  let component: CurrencyViewComponent;
  let fixture: ComponentFixture<CurrencyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
