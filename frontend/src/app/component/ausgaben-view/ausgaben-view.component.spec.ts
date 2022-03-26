import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AusgabenViewComponent } from './ausgaben-view.component';

describe('AusgabenViewComponent', () => {
  let component: AusgabenViewComponent;
  let fixture: ComponentFixture<AusgabenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AusgabenViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AusgabenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
