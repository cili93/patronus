import { TestBed } from '@angular/core/testing';

import { HttpRequestInterceptor } from './http-request.interceptor';
import { EmergencyRepository } from '../emergencies/repositories/emergency.repository';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HttpRequestInterceptor', () => {
  let service: EmergencyRepository;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmergencyRepository, HttpRequestInterceptor],
    });

    service = TestBed.get(EmergencyRepository);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    let interceptor = TestBed.get(HttpRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should add an Authorization header', () => {
    service.get().subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`${'http://localhost:4200'}/api/getAllEmergencies`);

    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  });
});
