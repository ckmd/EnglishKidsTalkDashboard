import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCategoryCreateComponent } from './question-category-create.component';

describe('QuestionCategoryCreateComponent', () => {
  let component: QuestionCategoryCreateComponent;
  let fixture: ComponentFixture<QuestionCategoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCategoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
