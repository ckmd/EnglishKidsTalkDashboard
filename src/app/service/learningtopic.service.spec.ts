import { TestBed } from '@angular/core/testing';

import { LearningtopicService } from './learningtopic.service';

describe('LearningtopicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearningtopicService = TestBed.get(LearningtopicService);
    expect(service).toBeTruthy();
  });
});
