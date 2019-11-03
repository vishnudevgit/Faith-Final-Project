import { TestBed } from '@angular/core/testing';

import { VustvendordetService } from './vustvendordet.service';

describe('VustvendordetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VustvendordetService = TestBed.get(VustvendordetService);
    expect(service).toBeTruthy();
  });
});
