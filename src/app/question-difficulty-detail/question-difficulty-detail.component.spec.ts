import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDifficultyDetailComponent } from './question-difficulty-detail.component';

describe('QuestionDifficultyDetailComponent', () => {
  let component: QuestionDifficultyDetailComponent;
  let fixture: ComponentFixture<QuestionDifficultyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDifficultyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDifficultyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
