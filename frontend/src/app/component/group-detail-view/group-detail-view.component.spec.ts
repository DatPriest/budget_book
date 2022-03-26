import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailViewComponent } from './group-detail-view.component';

describe('GroupDetailViewComponent', () => {
  let component: GroupDetailViewComponent;
  let fixture: ComponentFixture<GroupDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
