import { TestBed } from '@angular/core/testing';

import { QuestionDifficultyService } from './question-difficulty.service';

describe('QuestionDifficultyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionDifficultyService = TestBed.get(QuestionDifficultyService);
    expect(service).toBeTruthy();
  });
});
