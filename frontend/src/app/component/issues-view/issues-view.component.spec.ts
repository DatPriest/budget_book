import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssuesViewComponent } from './issues-view.component';

describe('IssuesViewComponent', () => {
  let component: IssuesViewComponent;
  let fixture: ComponentFixture<IssuesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
