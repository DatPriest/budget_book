import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintViewComponent } from './imprint-view.component';

describe('ImprintViewComponent', () => {
  let component: ImprintViewComponent;
  let fixture: ComponentFixture<ImprintViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprintViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprintViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
