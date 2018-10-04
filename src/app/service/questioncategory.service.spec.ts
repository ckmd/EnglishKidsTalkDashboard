import { TestBed } from '@angular/core/testing';

import { QuestioncategoryService } from './questioncategory.service';

describe('QuestioncategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestioncategoryService = TestBed.get(QuestioncategoryService);
    expect(service).toBeTruthy();
  });
});
