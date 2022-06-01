import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionViewComponent } from './ask-question-view.component';

describe('AskQuestionViewComponent', () => {
  let component: AskQuestionViewComponent;
  let fixture: ComponentFixture<AskQuestionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskQuestionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
