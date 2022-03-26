import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCreateViewComponent } from './group-create-view.component';

describe('GroupCreateViewComponent', () => {
  let component: GroupCreateViewComponent;
  let fixture: ComponentFixture<GroupCreateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCreateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
