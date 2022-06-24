import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqProfileViewComponent } from './faq-profile-view.component';

describe('FaqProfileViewComponent', () => {
  let component: FaqProfileViewComponent;
  let fixture: ComponentFixture<FaqProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
