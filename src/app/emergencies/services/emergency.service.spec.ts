import { TestBed } from '@angular/core/testing';

import { EmergencyService } from './emergency.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmergencyRepository } from '../repositories/emergency.repository';

describe('EmergencyService', () => {
  let service: EmergencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmergencyRepository],
    });
    service = TestBed.inject(EmergencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getEmergencies', () => {
    spyOn(service, 'getEmergencies');
    service.getEmergencies();
    expect(service.getEmergencies).toHaveBeenCalled();
  });
});
