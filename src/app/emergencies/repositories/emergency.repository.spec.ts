import { TestBed } from '@angular/core/testing';

import { EmergencyRepository } from './emergency.repository';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { EmergencyResponse } from '../types/emergency';

const mockEmergency: EmergencyResponse = {
  content: [
    {
      device: {
        serialNumber: '123',
      },
      emergency: {
        emergencyId: '111',
        requestTime: Date.now().toString(),
      },
      holder: {
        firstName: 'John',
        lastName: 'Doe',
      },
    },
  ],
};

describe('EmergencyService', () => {
  let service: EmergencyRepository;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmergencyRepository);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getEmergencies', () => {
    spyOn(service, 'get');
    service.get();
    expect(service.get).toHaveBeenCalled();
  });

  it('should get emergencies', () => {
    service.get().subscribe((res) => {
      expect(res).toEqual(mockEmergency);
    });

    const req = controller.expectOne(({method: 'GET', url: `${'http://localhost:4200'}/api/getAllEmergencies`}));
    req.flush(mockEmergency);
  });
});
