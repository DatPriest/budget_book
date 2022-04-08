import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewIssuesViewComponent } from "./new-issues-view.component";

describe('NewIssuesViewComponent', () => {
  let component: NewIssuesViewComponent;
  let fixture: ComponentFixture<NewIssuesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIssuesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIssuesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
