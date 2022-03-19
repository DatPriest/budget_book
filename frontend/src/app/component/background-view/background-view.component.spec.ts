import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundViewComponent } from './background-view.component';

describe('BackgroundViewComponent', () => {
  let component: BackgroundViewComponent;
  let fixture: ComponentFixture<BackgroundViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
