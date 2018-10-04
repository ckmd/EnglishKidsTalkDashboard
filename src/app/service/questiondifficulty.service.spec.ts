import { TestBed } from '@angular/core/testing';

import { QuestiondifficultyService } from './questiondifficulty.service';

describe('QuestiondifficultyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestiondifficultyService = TestBed.get(QuestiondifficultyService);
    expect(service).toBeTruthy();
  });
});
