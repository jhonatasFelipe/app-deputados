import { TestBed } from '@angular/core/testing';

import { UfsService } from './ufs.service';

describe('UfsService', () => {
  let service: UfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
