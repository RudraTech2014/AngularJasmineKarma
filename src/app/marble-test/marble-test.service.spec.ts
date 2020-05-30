import { TestBed } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';

import { MarbleTestService } from './marble-test.service';

describe('MarbleTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarbleTestService = TestBed.get(MarbleTestService);
    expect(service).toBeTruthy();
  });
  
  it('Should display the production list (marble)', ()=>{

  });
});
