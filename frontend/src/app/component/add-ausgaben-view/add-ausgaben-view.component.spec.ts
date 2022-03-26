import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAusgabenViewComponent } from './add-ausgaben-view.component';

describe('AddAusgabenViewComponent', () => {
  let component: AddAusgabenViewComponent;
  let fixture: ComponentFixture<AddAusgabenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAusgabenViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAusgabenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
