import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInviteViewComponent } from './create-invite-view.component';

describe('CreateInviteViewComponent', () => {
  let component: CreateInviteViewComponent;
  let fixture: ComponentFixture<CreateInviteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInviteViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInviteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
