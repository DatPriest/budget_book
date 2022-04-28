import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtcViewComponent } from './gtc-view.component';

describe('GtcViewComponent', () => {
  let component: GtcViewComponent;
  let fixture: ComponentFixture<GtcViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtcViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GtcViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
