import { TestBed, inject } from '@angular/core/testing';

import { ServerconnectionService } from './serverconnection.service';
import { HttpClientModule } from '@angular/common/http';

describe('ServerconnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerconnectionService, HttpClientModule]
    });
  });

  it('should be created', inject([ServerconnectionService], (service: ServerconnectionService) => {
    expect(service).toBeTruthy();
  }));
});
