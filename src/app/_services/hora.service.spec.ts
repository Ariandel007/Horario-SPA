/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HoraService } from './hora.service';

describe('Service: Hora', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoraService]
    });
  });

  it('should ...', inject([HoraService], (service: HoraService) => {
    expect(service).toBeTruthy();
  }));
});
