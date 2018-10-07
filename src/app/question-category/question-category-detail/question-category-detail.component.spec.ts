import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCategoryDetailComponent } from './question-category-detail.component';

describe('QuestionCategoryDetailComponent', () => {
  let component: QuestionCategoryDetailComponent;
  let fixture: ComponentFixture<QuestionCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
