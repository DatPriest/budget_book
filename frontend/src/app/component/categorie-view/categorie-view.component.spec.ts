import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieViewComponent } from './categorie-view.component';

describe('CategorieViewComponent', () => {
  let component: CategorieViewComponent;
  let fixture: ComponentFixture<CategorieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
