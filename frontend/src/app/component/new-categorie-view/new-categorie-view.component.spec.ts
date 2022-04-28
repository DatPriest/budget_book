import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCategorieViewComponent } from './new-categorie-view.component';

describe('NewCategorieViewComponent', () => {
  let component: NewCategorieViewComponent;
  let fixture: ComponentFixture<NewCategorieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCategorieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCategorieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
