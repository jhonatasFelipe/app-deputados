import { TestBed } from '@angular/core/testing';

import { DeputadosApiService } from './deputados-api.service';

describe('DeputadosApiService', () => {
  let service: DeputadosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeputadosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
