import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPasswordViewComponent } from './new-password-view.component';

describe('NewPasswordViewComponent', () => {
  let component: NewPasswordViewComponent;
  let fixture: ComponentFixture<NewPasswordViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPasswordViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPasswordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
