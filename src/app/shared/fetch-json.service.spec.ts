import { TestBed, inject } from '@angular/core/testing';

import { FetchJsonService } from './fetch-json.service';

describe('FetchJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchJsonService]
    });
  });

  it('should be created', inject([FetchJsonService], (service: FetchJsonService) => {
    expect(service).toBeTruthy();
  }));
});
