import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordForgottenViewComponent } from './password-forgotten-view.component';

describe('PasswordForgottenViewComponent', () => {
  let component: PasswordForgottenViewComponent;
  let fixture: ComponentFixture<PasswordForgottenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordForgottenViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordForgottenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
