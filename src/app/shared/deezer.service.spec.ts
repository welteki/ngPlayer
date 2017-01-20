/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeezerService } from './deezer.service';

describe('DeezerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeezerService]
    });
  });

  it('should ...', inject([DeezerService], (service: DeezerService) => {
    expect(service).toBeTruthy();
  }));
});
