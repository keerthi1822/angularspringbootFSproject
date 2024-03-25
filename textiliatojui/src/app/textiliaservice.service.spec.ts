import { TestBed } from '@angular/core/testing';

import { TextiliaserviceService } from './textiliaservice.service';

describe('TextiliaserviceService', () => {
  let service: TextiliaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextiliaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
