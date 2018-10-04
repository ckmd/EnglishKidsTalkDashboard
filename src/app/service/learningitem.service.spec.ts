import { TestBed } from '@angular/core/testing';

import { LearningitemService } from './learningitem.service';

describe('LearningitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearningitemService = TestBed.get(LearningitemService);
    expect(service).toBeTruthy();
  });
});
