import { TestBed } from '@angular/core/testing';

import { MockSpyService } from './mock-spy.service';

describe('MockSpyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockSpyService = TestBed.get(MockSpyService);
    expect(service).toBeTruthy();
  });
});
