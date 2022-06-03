import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMemberViewComponent } from './remove-member-view.component';

describe('RemoveMemberViewComponent', () => {
  let component: RemoveMemberViewComponent;
  let fixture: ComponentFixture<RemoveMemberViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveMemberViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMemberViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
