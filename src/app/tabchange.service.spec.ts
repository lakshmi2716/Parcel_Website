import { TestBed } from '@angular/core/testing';

import { TabchangeService } from './tabchange.service';

describe('TabchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabchangeService = TestBed.get(TabchangeService);
    expect(service).toBeTruthy();
  });
});
