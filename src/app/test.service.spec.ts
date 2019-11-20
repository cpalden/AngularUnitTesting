import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });
  it('should have add function', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service.add).toBeTruthy();
  });
  it('should add two numbers', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service.add(1, 2)).toEqual(3);
  });
});
