import { TestBed } from '@angular/core/testing';

import { CiscoDataService } from './cisco-data.service';

describe('CiscoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CiscoDataService = TestBed.get(CiscoDataService);
    expect(service).toBeTruthy();
  });
});
