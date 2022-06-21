import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodViewComponent } from './period-view.component';

describe('PeriodViewComponent', () => {
  let component: PeriodViewComponent;
  let fixture: ComponentFixture<PeriodViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
