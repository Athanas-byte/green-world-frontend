import { TestBed } from '@angular/core/testing';

import { RolesserviceService } from './rolesservice.service';

describe('RolesserviceService', () => {
  let service: RolesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
