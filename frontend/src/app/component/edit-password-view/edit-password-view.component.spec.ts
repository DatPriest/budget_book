import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPasswordViewComponent } from './edit-password-view.component';

describe('EditPasswordViewComponent', () => {
  let component: EditPasswordViewComponent;
  let fixture: ComponentFixture<EditPasswordViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPasswordViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPasswordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
