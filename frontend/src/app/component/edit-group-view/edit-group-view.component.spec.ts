import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupViewComponent } from './edit-group-view.component';

describe('EditGroupViewComponent', () => {
  let component: EditGroupViewComponent;
  let fixture: ComponentFixture<EditGroupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGroupViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
