import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergenciesComponent } from './emergencies.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmergencyService } from './services/emergency.service';
import { of } from 'rxjs';

const mockEmergencies = [
  {
    emergencyId: '123',
    holderName: 'Test',
    emergencyReqTime: Date.now().toString(),
    deviceId: '222',
  },
]

describe('EmergenciesComponent', () => {
  let component: EmergenciesComponent;
  let fixture: ComponentFixture<EmergenciesComponent>;
  let fakeService: EmergencyService;

  beforeEach(async () => {
    fakeService = jasmine.createSpyObj<EmergencyService>('EmergencyService', {
      getEmergencies: of(mockEmergencies),
    });

    await TestBed.configureTestingModule({
      declarations: [EmergenciesComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: EmergencyService, useValue: fakeService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEmergencies', () => {
    expect(fakeService.getEmergencies).toHaveBeenCalled();
  });

  it('should fetch emergencies', () => {
    expect(component.emergencies).toEqual(mockEmergencies);
  });
});
