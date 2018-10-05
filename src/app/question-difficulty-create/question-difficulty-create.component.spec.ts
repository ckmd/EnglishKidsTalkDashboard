import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDifficultyCreateComponent } from './question-difficulty-create.component';

describe('QuestionDifficultyCreateComponent', () => {
  let component: QuestionDifficultyCreateComponent;
  let fixture: ComponentFixture<QuestionDifficultyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDifficultyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDifficultyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
