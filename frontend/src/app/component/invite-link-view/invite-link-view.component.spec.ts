import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteLinkViewComponent } from './invite-link-view.component';

describe('InviteLinkViewComponent', () => {
  let component: InviteLinkViewComponent;
  let fixture: ComponentFixture<InviteLinkViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteLinkViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteLinkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
