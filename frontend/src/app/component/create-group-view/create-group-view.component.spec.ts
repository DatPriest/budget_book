import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupViewComponent } from './create-group-view.component';

describe('CreateGroupViewComponent', () => {
  let component: CreateGroupViewComponent;
  let fixture: ComponentFixture<CreateGroupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGroupViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
